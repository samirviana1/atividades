import axios from "axios";

class GitHub {
  async getUserFromGithub(user: string) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);

      console.log(response.data);
    } catch (error) {
      console.error("Usuário não existe");
    }
  }

  async getRepositories(repo: string) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch (error) {
      console.error("Repositório não existe");
    }
  }
}

const gitHub = new GitHub();

gitHub.getUserFromGithub("mmcamargo");
gitHub.getUserFromGithub("ljames666");

gitHub.getRepositories("marcelo-growdev/scrapbook-es6");
gitHub.getRepositories("marcelo-growdev/qdbqqbqwn");
