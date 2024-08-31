function submitQuiz() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = ''; // Clear previous results
    
    let projects = [];

    // Example logic for project recommendations
    if (question1 === 'web') {
        projects = ['Mini Notes App','Send me Mail','To do list','Login form'];
    } else if (question1 === 'data' ) {
        projects = ['Diwali Sales Analysis','Wine Quality Check','Gold Price prediction','Iris flower Classification','Crop Production'];
    } else if (question1 === 'design') {
        projects = ['Uber Insights Project'];
    } else if (question1 === 'SQL') {
            projects = ['Client Sales Manager Dashboard','Uber Insights Hub','Zomato Queries'];
    }   
    // Display recommendations
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        recommendations.appendChild(listItem);
    });

    // Show results
    document.getElementById('quiz-results').classList.remove('hidden');
}
