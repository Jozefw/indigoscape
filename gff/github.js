class GitHub {
    consturctor(){
        this.client_id = "8db60ca96864cf4579ab";
        this.client_secret = "fb928f3091571910e86f1366561f4768b12f62fb";
        this.repos_count = 5;
        this.repos_sort = 'asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}