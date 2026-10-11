
Feature: Ecommerce validations

@Validation
Scenario Outline: Scenario Outline name: Placing the Order 
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    | username         | password |
    | dummy1@gmail.com | 13445    |
    | dummy2@gmail.com | 43432    |