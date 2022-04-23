class UI{
    constructor(){
        this.profile = document.getElementById('profile');

    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class="car card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-primary">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }
    // show repos info
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output = output + `
           <div class="card car-body mb-2">
                <div class="row">
                    <div class="col-md-6" style="padding: 10px 35px;">
                    <a href=${repo.html_url} target="_blank"> ${repo.name}</a>
                    </div>
                    <div class="col-md-6" style="padding: 10px 35px;">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                     <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
           </div>
            `
        });
        // output the data to page
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message,className){
        // call to clear pre-existing alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // create div class name
        div.className = className;
        // create text inside div
        div.appendChild(document.createTextNode(message));
        // create parent space
        const container = document.querySelector('.searchContainer');
        // get search div 
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        }, 3000)
    }
    // clear multiple alerts
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
            if(currentAlert){
                currentAlert.remove();
            }
    }
    // clear input area
    clearProfile(){
        this.profile.innerHTML = "";
    }
}