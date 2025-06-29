# Gemini API Integration for Investment Research Hub

This guide explains how to use Google Gemini AI to automatically generate investment thesis reports for your Investment Research Hub.

## 🚀 Quick Start

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key

### 2. Configure Environment
1. Open the `.env` file in your project root
2. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   GEMINI_MODEL=gemini-1.5-flash
   ```

### 3. Generate Your First Report
```bash
# Generate a report for Rocket Lab
node generate-report.js "Rocket Lab" "RKLB"

# Generate a report for any company
node generate-report.js "Company Name" "TICKER"
```

## 📁 Generated Files

The script will create:
- `{ticker}-investment-thesis.html` - The generated investment thesis page
- The file will be automatically added to your project

## 🔧 Customization

### Modify the Prompt
Edit the `prompt` variable in `generate-report.js` to customize:
- Content structure
- Analysis depth
- Specific metrics to include
- Risk assessment focus

### Template Customization
The script uses a basic HTML template. You can enhance it by:
- Adding more interactive charts
- Including additional sections
- Customizing styling
- Adding more sophisticated data visualization

## 📊 Example Usage

```bash
# Generate reports for multiple companies
node generate-report.js "Rocket Lab" "RKLB"
node generate-report.js "Palantir" "PLTR"
node generate-report.js "Snowflake" "SNOW"
node generate-report.js "CrowdStrike" "CRWD"
```

## 🔒 Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Keep your API key secure and don't share it

## 🛠️ Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your API key is correct and has proper permissions
2. **Rate Limiting**: Gemini has rate limits; add delays between requests if generating multiple reports
3. **JSON Parsing Error**: The AI might not return valid JSON; check the generated content

### Debug Mode
Add console.log statements to see the raw AI response:
```javascript
console.log('Raw AI response:', content);
```

## 📈 Next Steps

1. **Enhance Templates**: Create more sophisticated HTML templates
2. **Add Data Sources**: Integrate with financial APIs for real-time data
3. **Batch Processing**: Generate multiple reports at once
4. **Quality Control**: Add validation for generated content
5. **Auto-Integration**: Automatically update the index.html file

## 🤝 Contributing

Feel free to enhance the script by:
- Improving the prompt engineering
- Adding more sophisticated templates
- Integrating additional data sources
- Enhancing error handling

## 📞 Support

If you encounter issues:
1. Check the console output for error messages
2. Verify your API key is correct
3. Ensure all dependencies are installed
4. Check the Gemini API documentation for any changes 