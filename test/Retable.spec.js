const Retable = require('../lib/Retable');  // Replace './index' with the path to your main file

describe('RetableAPI', () => {
  describe('getWorkspaces', () => {
    it('should return all workspaces', async () => {
      const apiKey = '';  // Replace 'API_KEY' with your actual API key
      const retable = new Retable(apiKey);

      const workspaces = await retable.workspaces();

      console.log(JSON.stringify(workspaces));

      // Replace the following line with the expected output of your API call
      expect(workspaces)
    });
  });

  // Additional test cases for other functions go here
});