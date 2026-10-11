
Feature: Ecommerce validations

Scenario: Placing the Order 
    Given a login to Ecommerce application with "pushparajrahulshanthi851@gmail.com" and "Push@851"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order in present in the OrderHistory

Scenario Outline: Scenario Outline name: Placing the Order 
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    | username         | password |
    | dummy1@gmail.com | 13445    |
    | dummy2@gmail.com | 43432    |