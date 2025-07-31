angular.module('patientApp', ['ui.bootstrap'])
  .controller('PatientController', ['$scope', function($scope) {
    // Initialize search form
    $scope.searchForm = {
      firstName: '',
      lastName: '',
      dob: '',
      dobDate: '',
      startDate: '',
      startDateDate: '',
      endDate: '',
      endDateDate: ''
    };

    // Initialize advanced search form
    $scope.advancedSearch = {
      firstName: '',
      lastName: '',
      dob: '',
      dobDate: '',
      sex: '',
      residence: '',
      mrn: '',
      phone: '',
      email: '',
      idNumber: '',
      hospital: '',
      department: '',
      physician: '',
      conditions: '',
      appointment: '',
      appointmentDate: ''
    };

    // Initialize search query
    $scope.searchQuery = '';

    // Tab states
    $scope.activeTab = 'basic';
    $scope.activeListTab = 'today';

    // Patient data from the screenshot
    $scope.patients = [
      {
        name: 'Ashley Citarella',
        dob: '07/02/1958',
        sex: 'Female',
        residence: 'Boston, MA',
        mrn: 'YTK12345678',
        idNumber: 'NHL12345678',
        ssn: '0000',
        phone: '(000)-000-0000',
        email: 'ashcitarella@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'COPD, CHF, Diabetes (Type II)',
        nextAppointment: 'Today 9:00 am'
      },
      {
        name: 'Albert Johnson',
        dob: '01/15/1952',
        sex: 'Male',
        residence: 'Waltham, MA',
        mrn: 'YTK12343675',
        idNumber: 'NHL12345678',
        ssn: '1111',
        phone: '(111)-111-1111',
        email: 'aljohnson1952@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF',
        nextAppointment: 'Today 10:00 pm'
      },
      {
        name: 'Leslie Isabelle Wang',
        dob: '03/12/1985',
        sex: 'Female',
        residence: 'Mooselookmeguntic, ME',
        mrn: 'YTK12343675',
        idNumber: 'NHL12345678',
        ssn: '2222',
        phone: '(222)-222-2222',
        email: 'leslie.isabelle.wang@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF',
        nextAppointment: 'Today 11:00 pm'
      },
      {
        name: 'Adela Bašić',
        dob: '03/12/1950',
        sex: 'Female',
        residence: 'Boston, MA',
        mrn: 'YTK12343675',
        idNumber: 'NHL12345678',
        ssn: '3333',
        phone: '(333)-333-3333',
        email: 'adelabasic50@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF',
        nextAppointment: 'Today 1:30 pm'
      },
      {
        name: 'Reza Saatchi',
        dob: '03/12/1957',
        sex: 'Male',
        residence: 'Boston, MA',
        mrn: 'YTK12343675',
        idNumber: 'NHL12345678',
        ssn: '4444',
        phone: '(444)-444-4444',
        email: 'reza.saatchi@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF',
        nextAppointment: 'Today 2:30 pm'
      },
      {
        name: 'Arjun Chandrasekar',
        dob: '03/12/1958',
        sex: 'Male',
        residence: 'New York City, NY',
        mrn: 'YTK12343675',
        idNumber: 'NHL12345678',
        ssn: '5555',
        phone: '(555)-555-5555',
        email: 'arjunchandra@gmail.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF',
        nextAppointment: 'Today 3:30 pm'
      },
      {
        name: 'Maria Rodriguez',
        dob: '08/22/1965',
        sex: 'Female',
        residence: 'Cambridge, MA',
        mrn: 'YTK12345679',
        idNumber: 'NHL12345679',
        ssn: '6666',
        phone: '(666)-666-6666',
        email: 'mrodriguez@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Hypertension, Diabetes (Type I)',
        nextAppointment: 'Today 4:00 pm'
      },
      {
        name: 'James Wilson',
        dob: '12/05/1948',
        sex: 'Male',
        residence: 'Somerville, MA',
        mrn: 'YTK12345680',
        idNumber: 'NHL12345680',
        ssn: '7777',
        phone: '(777)-777-7777',
        email: 'jwilson48@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'COPD, Asthma',
        nextAppointment: 'Today 5:15 pm'
      },
      {
        name: 'Sarah Chen',
        dob: '05/18/1972',
        sex: 'Female',
        residence: 'Brookline, MA',
        mrn: 'YTK12345681',
        idNumber: 'NHL12345681',
        ssn: '8888',
        phone: '(888)-888-8888',
        email: 'schen72@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF, Hypertension',
        nextAppointment: 'Tomorrow 8:00 am'
      },
      {
        name: 'Robert Thompson',
        dob: '09/30/1955',
        sex: 'Male',
        residence: 'Newton, MA',
        mrn: 'YTK12345682',
        idNumber: 'NHL12345682',
        ssn: '9999',
        phone: '(999)-999-9999',
        email: 'rthompson55@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Diabetes (Type II), Hypertension',
        nextAppointment: 'Tomorrow 9:30 am'
      },
      {
        name: 'Lisa Martinez',
        dob: '11/14/1980',
        sex: 'Female',
        residence: 'Medford, MA',
        mrn: 'YTK12345683',
        idNumber: 'NHL12345683',
        ssn: '1010',
        phone: '(101)-010-1010',
        email: 'lmartinez80@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'COPD',
        nextAppointment: 'Tomorrow 11:45 am'
      },
      {
        name: 'David Kim',
        dob: '02/28/1968',
        sex: 'Male',
        residence: 'Arlington, MA',
        mrn: 'YTK12345684',
        idNumber: 'NHL12345684',
        ssn: '1111',
        phone: '(111)-111-1111',
        email: 'dkim68@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF, Diabetes (Type II)',
        nextAppointment: 'Tomorrow 2:00 pm'
      },
      {
        name: 'Jennifer Davis',
        dob: '07/07/1975',
        sex: 'Female',
        residence: 'Watertown, MA',
        mrn: 'YTK12345685',
        idNumber: 'NHL12345685',
        ssn: '1212',
        phone: '(121)-212-1212',
        email: 'jdavis75@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Hypertension, Asthma',
        nextAppointment: 'Tomorrow 3:30 pm'
      },
      {
        name: 'Michael Brown',
        dob: '04/15/1950',
        sex: 'Male',
        residence: 'Belmont, MA',
        mrn: 'YTK12345686',
        idNumber: 'NHL12345686',
        ssn: '1313',
        phone: '(131)-313-1313',
        email: 'mbrown50@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'COPD, CHF',
        nextAppointment: 'Tomorrow 4:45 pm'
      },
      {
        name: 'Amanda Garcia',
        dob: '01/03/1988',
        sex: 'Female',
        residence: 'Lexington, MA',
        mrn: 'YTK12345687',
        idNumber: 'NHL12345687',
        ssn: '1414',
        phone: '(141)-414-1414',
        email: 'agarcia88@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Diabetes (Type I), Hypertension',
        nextAppointment: 'Wednesday 8:30 am'
      },
      {
        name: 'Christopher Lee',
        dob: '06/20/1962',
        sex: 'Male',
        residence: 'Concord, MA',
        mrn: 'YTK12345688',
        idNumber: 'NHL12345688',
        ssn: '1515',
        phone: '(151)-515-1515',
        email: 'clee62@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'CHF, COPD',
        nextAppointment: 'Wednesday 10:15 am'
      },
      {
        name: 'Nicole Anderson',
        dob: '10/12/1978',
        sex: 'Female',
        residence: 'Winchester, MA',
        mrn: 'YTK12345689',
        idNumber: 'NHL12345689',
        ssn: '1616',
        phone: '(161)-616-1616',
        email: 'nanderson78@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Asthma, Hypertension',
        nextAppointment: 'Wednesday 1:00 pm'
      },
      {
        name: 'Kevin Taylor',
        dob: '03/25/1953',
        sex: 'Male',
        residence: 'Woburn, MA',
        mrn: 'YTK12345690',
        idNumber: 'NHL12345690',
        ssn: '1717',
        phone: '(171)-717-1717',
        email: 'ktaylor53@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Diabetes (Type II), CHF',
        nextAppointment: 'Wednesday 2:30 pm'
      },
      {
        name: 'Rachel White',
        dob: '12/08/1982',
        sex: 'Female',
        residence: 'Burlington, MA',
        mrn: 'YTK12345691',
        idNumber: 'NHL12345691',
        ssn: '1818',
        phone: '(181)-818-1818',
        email: 'rwhite82@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'COPD, Asthma',
        nextAppointment: 'Wednesday 4:00 pm'
      },
      {
        name: 'Steven Miller',
        dob: '08/17/1957',
        sex: 'Male',
        residence: 'Reading, MA',
        mrn: 'YTK12345692',
        idNumber: 'NHL12345692',
        ssn: '1919',
        phone: '(191)-919-1919',
        email: 'smiller57@email.com',
        hospital: 'Massachusetts Medical Group',
        department: 'Department of Cardiology',
        physician: 'Dr. Beth Smith',
        conditions: 'Hypertension, CHF',
        nextAppointment: 'Thursday 9:00 am'
      }
    ];

    // Initialize separate data for each tab
    $scope.todayPatients = $scope.patients;
    $scope.searchResults = [];

    // Set active tab
    $scope.setActiveTab = function(tab) {
      $scope.activeTab = tab;
    };

    // Set active list tab
    $scope.setActiveListTab = function(tab) {
      $scope.activeListTab = tab;
    };

    // Get current patients based on active tab
    $scope.getCurrentPatients = function() {
      if ($scope.activeListTab === 'today') {
        return $scope.todayPatients;
      } else {
        return $scope.searchResults;
      }
    };

    // Filter patients based on search query
    $scope.filterPatients = function() {
      if (!$scope.searchQuery) {
        $scope.searchResults = [];
        return;
      }

      $scope.searchResults = $scope.patients.filter(function(patient) {
        return patient.name.toLowerCase().includes($scope.searchQuery.toLowerCase()) ||
               patient.email.toLowerCase().includes($scope.searchQuery.toLowerCase()) ||
               patient.mrn.toLowerCase().includes($scope.searchQuery.toLowerCase()) ||
               patient.phone.includes($scope.searchQuery);
      });
      
      // Switch to search results tab when searching
      if ($scope.searchQuery.trim()) {
        $scope.activeListTab = 'search';
      }
    };

    // Perform basic search
    $scope.performSearch = function() {
      if ($scope.activeTab === 'basic') {
        $scope.searchResults = $scope.patients.filter(function(patient) {
          var matches = true;

          // Check first name
          if ($scope.searchForm.firstName && 
              !patient.name.toLowerCase().includes($scope.searchForm.firstName.toLowerCase())) {
            matches = false;
          }

          // Check last name
          if ($scope.searchForm.lastName && 
              !patient.name.toLowerCase().includes($scope.searchForm.lastName.toLowerCase())) {
            matches = false;
          }

          // Check date of birth
          if ($scope.searchForm.dob && patient.dob !== $scope.searchForm.dob) {
            matches = false;
          }

          // Check appointment range
          if ($scope.searchForm.startDate || $scope.searchForm.endDate) {
            var appointmentDate = $scope.parseAppointmentDate(patient.nextAppointment);
            if (appointmentDate) {
              if ($scope.searchForm.startDate) {
                var startDate = new Date($scope.searchForm.startDate);
                if (appointmentDate < startDate) {
                  matches = false;
                }
              }
              if ($scope.searchForm.endDate) {
                var endDate = new Date($scope.searchForm.endDate);
                if (appointmentDate > endDate) {
                  matches = false;
                }
              }
            }
          }

          return matches;
        });
      } else {
        // Advanced search
        $scope.searchResults = $scope.patients.filter(function(patient) {
          var matches = true;

          // Personal Information
          if ($scope.advancedSearch.firstName && 
              !patient.name.toLowerCase().includes($scope.advancedSearch.firstName.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.lastName && 
              !patient.name.toLowerCase().includes($scope.advancedSearch.lastName.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.dob && patient.dob !== $scope.advancedSearch.dob) {
            matches = false;
          }
          if ($scope.advancedSearch.sex && patient.sex !== $scope.advancedSearch.sex) {
            matches = false;
          }
          if ($scope.advancedSearch.residence && 
              !patient.residence.toLowerCase().includes($scope.advancedSearch.residence.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.mrn && patient.mrn !== $scope.advancedSearch.mrn) {
            matches = false;
          }

          // Contact Information
          if ($scope.advancedSearch.phone && patient.phone !== $scope.advancedSearch.phone) {
            matches = false;
          }
          if ($scope.advancedSearch.email && 
              !patient.email.toLowerCase().includes($scope.advancedSearch.email.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.idNumber && patient.idNumber !== $scope.advancedSearch.idNumber) {
            matches = false;
          }

          // Medical Information
          if ($scope.advancedSearch.hospital && 
              !patient.hospital.toLowerCase().includes($scope.advancedSearch.hospital.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.department && 
              !patient.department.toLowerCase().includes($scope.advancedSearch.department.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.physician && 
              !patient.physician.toLowerCase().includes($scope.advancedSearch.physician.toLowerCase())) {
            matches = false;
          }
          if ($scope.advancedSearch.conditions && 
              !patient.conditions.toLowerCase().includes($scope.advancedSearch.conditions.toLowerCase())) {
            matches = false;
          }

          return matches;
        });
      }
      
      // Switch to search results tab
      $scope.activeListTab = 'search';
    };

    // Initialize the view
    $scope.$watch('searchQuery', function() {
      $scope.filterPatients();
    });

    // Simple date formatting function
    $scope.formatDate = function(field) {
      var dateField = field + 'Date';
      var dateValue = $scope.searchForm[dateField];
      
      if (dateValue) {
        var date = new Date(dateValue);
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        var year = date.getFullYear();
        var formattedDate = month + '/' + day + '/' + year;
        
        $scope.searchForm[field] = formattedDate;
      }
    };

    // Advanced date formatting function
    $scope.formatAdvancedDate = function(field) {
      var dateField = field + 'Date';
      var dateValue = $scope.advancedSearch[dateField];
      
      if (dateValue) {
        var date = new Date(dateValue);
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        var year = date.getFullYear();
        var formattedDate = month + '/' + day + '/' + year;
        
        $scope.advancedSearch[field] = formattedDate;
      }
    };

    // Parse appointment date string to Date object
    $scope.parseAppointmentDate = function(appointmentString) {
      if (!appointmentString) return null;
      
      var today = new Date();
      var tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      // Extract time from appointment string
      var timeMatch = appointmentString.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
      if (!timeMatch) return null;
      
      var hour = parseInt(timeMatch[1]);
      var minute = parseInt(timeMatch[2]);
      var period = timeMatch[3].toLowerCase();
      
      // Convert to 24-hour format
      if (period === 'pm' && hour !== 12) {
        hour += 12;
      } else if (period === 'am' && hour === 12) {
        hour = 0;
      }
      
      var appointmentDate = new Date();
      
      if (appointmentString.includes('Today')) {
        appointmentDate = new Date(today);
      } else if (appointmentString.includes('Tomorrow')) {
        appointmentDate = new Date(tomorrow);
      } else if (appointmentString.includes('Wednesday')) {
        appointmentDate = new Date(today);
        var daysUntilWednesday = (3 - today.getDay() + 7) % 7;
        if (daysUntilWednesday === 0) daysUntilWednesday = 7;
        appointmentDate.setDate(today.getDate() + daysUntilWednesday);
      } else if (appointmentString.includes('Thursday')) {
        appointmentDate = new Date(today);
        var daysUntilThursday = (4 - today.getDay() + 7) % 7;
        if (daysUntilThursday === 0) daysUntilThursday = 7;
        appointmentDate.setDate(today.getDate() + daysUntilThursday);
      }
      
      appointmentDate.setHours(hour, minute, 0, 0);
      return appointmentDate;
    };
  }]);
