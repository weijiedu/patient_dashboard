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
  }]);
