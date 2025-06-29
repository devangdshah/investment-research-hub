const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-1.5-flash' });

async function generateInvestmentThesis(companyName, ticker) {
    try {
        console.log(`Generating investment thesis for ${companyName} (${ticker})...`);
        
        const prompt = `Generate a comprehensive investment thesis for ${companyName} (${ticker}) in JSON format. Include:
        - Company overview and industry
        - Key financial metrics (market cap, revenue, growth)
        - Business model and revenue streams
        - Growth strategy and initiatives
        - Financial performance trends
        - Key risks and analyst ratings
        
        Return the response as valid JSON.`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const content = response.text();
        
        console.log('Generated content:', content);
        
        // For now, just create a basic HTML file
        const filename = `${ticker.toLowerCase()}-investment-thesis.html`;
        const basicHTML = createBasicHTML(companyName, ticker, content);
        
        const fs = require('fs');
        fs.writeFileSync(filename, basicHTML);
        
        console.log(`✅ Generated ${filename} successfully!`);
        return filename;
        
    } catch (error) {
        console.error('❌ Error generating investment thesis:', error);
        throw error;
    }
}

function createBasicHTML(companyName, ticker, content) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Investment Thesis: ${companyName} (${ticker})</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <header class="bg-white shadow-sm">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex items-center space-x-4">
                <a href="index.html" class="text-blue-600 hover:text-blue-800">← Back to Research Hub</a>
                <h1 class="text-xl font-bold">${companyName} (${ticker}) Investment Thesis</h1>
            </div>
        </nav>
    </header>
    
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold mb-4">Generated Content</h2>
            <pre class="bg-gray-100 p-4 rounded overflow-auto">${content}</pre>
        </div>
    </main>
</body>
</html>`;
}

// CLI Interface
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Usage: node generate-report.js "Company Name" "TICKER"');
        console.log('Example: node generate-report.js "Rocket Lab" "RKLB"');
        process.exit(1);
    }
    
    const companyName = args[0];
    const ticker = args[1];
    
    try {
        const filename = await generateInvestmentThesis(companyName, ticker);
        console.log(`\n🎉 Investment thesis generated successfully!`);
        console.log(`📄 File: ${filename}`);
        console.log(`🌐 Open ${filename} in your browser to view the report`);
    } catch (error) {
        console.error('Failed to generate investment thesis:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { generateInvestmentThesis };
