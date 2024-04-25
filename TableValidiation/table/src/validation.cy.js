/// <reference types="Cypress"/>   

describe('Table Component', () => {
    beforeEach(() => {
      // Load your React application
      cy.visit('http://localhost:3000');
    });
  
    it('should display the CSV data in a table', () => {
      // Upload CSV file
      const fileName = 'example.csv'; // Replace with your CSV file name
      cy.fixture(fileName).then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: fileName,
          mimeType: 'application/csv'
        });
      });
  
      // Wait for data to be loaded
      cy.get('table').should('be.visible');
  
      // Validate columns
      cy.get('thead th').should('have.length', 4); // Assuming there are 4 columns
      cy.get('thead th').eq(0).should('contain', 'Code');
      cy.get('thead th').eq(1).should('contain', 'Name');
      cy.get('thead th').eq(2).should('contain', 'Category');
      cy.get('thead th').eq(3).should('contain', 'Quantity');
  
      // Validate rows
      cy.get('tbody tr').should('have.length.gt', 0); // Assuming there are rows
      cy.get('tbody tr').each(($row) => {
        // Assuming the first column is Code, second is Name, third is Category, and fourth is Quantity
        cy.wrap($row).find('td').eq(0).should('match', /^[A-Za-z0-9]+$/); // Validate Code
        cy.wrap($row).find('td').eq(1).should('match', /^[A-Za-z]+$/); // Validate Name
        cy.wrap($row).find('td').eq(2).should('match', /^[A-Za-z]+$/); // Validate Category
        cy.wrap($row).find('td').eq(3).should('match', /^[0-9]+$/); // Validate Quantity
      });
    });
  });
  