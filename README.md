# 301-practice-4
----
**Q1:In an express server application, what does dotenv do**
This library does one simple task: loads environment variables from a .env file into the process.env variable in Node.js


**Q2:What does the following code do:**
function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};

find the templet with id "item-template" then compile the template and appende it to the #list 





**Q3:What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?**
*Relative*:This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.


*Absolute*:This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.
 

 layout.css

