Feature: Product listing -> filter by colour

  As a Customer
  I want to be able to filter category products list
  So that I can see list of products from selected filters

  Scenario: Example scenario
    When I am on the landing page
    Then I can see logo in navigation bar

  Scenario: Customer filters by colour
  Given User is on category page Tops
  When User Select Colour Filters
  And User filters products list by colour "Black"
  And Apply these filters
  Then Number of applied filters should be "1"
  And Filtered product list should be returned 

  Scenario: Customer filters by multiple colours
  Given User is on category page Tops
  When User Select Colour Filters
  And User filters products list by colour "White"
  And User filters products list by colour "Black"
  And Apply these filters
  Then Number of applied filters should be "1"
  And Filtered product list should be returned 

  Scenario: Customer clears colour filters
  Given User is on category page Tops
  When User Select Colour Filters
  And User filters products list by colour "White"
  When User clear all filters
  And Apply these filters
  Then No filters should be applied 
  And Non-filtered product list should be returned 
