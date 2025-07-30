# Patient Dashboard

A modern, responsive web application for healthcare professionals to search and manage patient information. Built with AngularJS and Bootstrap, this dashboard provides an intuitive interface for doctors to quickly access patient data and appointment schedules.

## Features

### 🔍 Advanced Patient Search
- **Basic Search**: Search by patient name, date of birth, and appointment date range
- **Advanced Search**: Comprehensive search with multiple criteria including:
  - Personal Information (name, DOB, sex, residence, MRN)
  - Contact Information (phone, email, ID number)
  - Medical Information (hospital, department, physician, conditions)

### 📋 Patient Management
- **Today's Patients**: View all patients scheduled for today
- **Search Results**: Filter and display patients based on search criteria
- **Patient Cards**: Detailed patient information display including:
  - Personal details (name, DOB, sex, residence)
  - Medical record information (MRN, ID number, SSN)
  - Contact information (phone, email)
  - Medical details (hospital, department, physician, conditions)
  - Next appointment scheduling

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Interface**: Modern, professional design with intuitive navigation
- **Tabbed Interface**: Easy switching between basic and advanced search modes
- **Visual Indicators**: Clear appointment times and patient avatars

## Technology Stack

- **Frontend Framework**: AngularJS 1.8.2
- **UI Framework**: Bootstrap 3.4.1
- **Icons**: Font Awesome 6.0.0
- **Styling**: Custom CSS with responsive design
- **Dependencies**: Angular UI Bootstrap for enhanced components

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd patient_dashboard
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or serve the files using a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Or open `index.html` directly in your browser

## Usage

### Basic Search
1. Use the "Basic" tab for quick patient searches
2. Enter patient information:
   - First Name
   - Last Name
   - Date of Birth
3. Set appointment date range (optional)
4. Click "Search" to find matching patients

### Advanced Search
1. Switch to the "Advanced" tab for detailed searches
2. Fill in any combination of search criteria:
   - **Personal Information**: Name, DOB, sex, residence, MRN
   - **Contact Information**: Phone, email, ID number
   - **Medical Information**: Hospital, department, physician, conditions
3. Click "Search" to filter patients

### Viewing Patients
- **Today's Patients**: View all patients scheduled for today
- **Search Results**: View patients matching your search criteria
- Each patient card displays comprehensive information in an organized layout

## File Structure

```
patient_dashboard/
├── index.html          # Main HTML file with application structure
├── app.js             # AngularJS application logic and data
├── style.css          # Custom CSS styling and responsive design
└── README.md          # This documentation file
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

### Adding New Features
1. **Data**: Add new patient data to the `patients` array in `app.js`
2. **Search Fields**: Extend the search forms in `index.html`
3. **Styling**: Modify `style.css` for visual changes
4. **Functionality**: Update the AngularJS controller in `app.js`

### Customization
- **Colors**: Modify CSS variables in `style.css`
- **Layout**: Adjust grid and flexbox properties
- **Data Structure**: Extend the patient object model in `app.js`

## Security Notes

⚠️ **Important**: This is a demo application with sample data. For production use:
- Implement proper authentication and authorization
- Use HTTPS for secure data transmission
- Follow HIPAA compliance guidelines for patient data
- Implement proper data validation and sanitization
- Use a secure backend API instead of client-side data

## License

This project is for demonstration purposes. Please ensure compliance with healthcare data regulations when using in production environments.

## Support

For questions or issues, please refer to the code comments or create an issue in the project repository.