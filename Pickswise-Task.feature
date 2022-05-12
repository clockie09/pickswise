Feature: Pickswise website
        Scenario: Next Up Filter
                Given I am on https://www.pickswise.com/
                When I Select the Next Up Sports Filter
                Then I can see an available list of Sports to filter by

        Scenario: Picks
                Given I am on https://www.pickswise.com/
                When I want to see the soccer picks
                Then I can see the correct soccer picks page