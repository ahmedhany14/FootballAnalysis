import { MatchReader } from './matchReader';
import { ReadCsv } from './CsvReader';
import { Summary } from './stats/Summary';
import { AvgGoolsForTeam } from './stats/AvgGools';
import { LogReport } from './stats/ConsolReport';

const csv = new ReadCsv('football.csv'); // declare csv object to only read the file

const transformedData = new MatchReader(csv); // declare transformedData object to transform the data from csv object
transformedData.read(); // call the read method to transform the data
const matches = transformedData.matches; // declare matches object to store the transformed data


const avgGoals = new AvgGoolsForTeam('Al ahly'); // declare avgGoals object to calculate the average
const logReport = new LogReport(); // declare logReport object to print the report

const summary = new Summary(avgGoals, logReport); // declare summary object to build the report

summary.build(matches); // call the build method to build the report
summary.print(); // call the print method to print the report
/*
inheritance vs composition

Inheritance is a way to create a new class from an existing class. The new class is called a derived class or a subclass.
The existing class is called a base class or a superclass. The derived class inherits the properties and methods of the base class.

moreformaly we use Inheritance when a child class `is a` parent class, ex (macheReader is a CsvReader, or the movieReader is a CsvReader)


Composition is a way to combine objects or classes into more complex data structures. It is a more flexible alternative to inheritance.
Composition allows you to create complex objects by combining simpler ones. It is based on the concept of has-a relationships.

moreformaly we use Composition when a class `has a` reference to another class, ex (MatchReader has a reference to CsvReader, APIReader has a reference to CsvReader)

--------------------------------------------------------------------------------------

complex example:

- let suppose we have a class called `window` have attributes like (width, height, open) a method called 'area' and 'toggleOpen',
and we have another class called 'wall' have attributes like (width, height, color) a method called 'area'.

    in this example, we can see that window and wall share the same attributes and methods, so we can use inheritance to create a parent class called 'shape'

    Shape class:
    - attributes (width, height)
    - methods (area)

    Window class extends Shape class:
    - attributes (open)
    - methods (toggleOpen)

    Wall class extends Shape class:
    - attributes (color)
    - methods (none)

    at the end we can say that window and wall `is a` shapes, so we can use inheritance to create a parent class called 'shape'


- What if we have another widnow but in this time it's a circle, so we can't use inheritance because the circle doesn't have the same attributes as the window,
so we can use composition to create a class called 'circle' and use it in the window class.

now all classes we have becomes 

    CircleWindow class:
    - attributes (radius, open)
    - methods (area, toggleOpen)

    RectangleWindow class:
    - attributes (width, height, open)
    - methods (area, toggleOpen)

    Wall class:
    - attributes (width, height, color)
    - methods (area)


to compose the classes we can use the following code, i will consider that rectacnge and circle are shapes that will used as a window

    Rectangle class:
    - attributes (width, height)
    - methods (area)

    Circle class:
    - attributes (radius)
    - methods (area)

    Window class:
    - methods (toggleOpen, area)
    - attributes (shape(can be a circle or rectangle or any other shape), open)

    Wall class:
    - methods (area)
    - attributes (shape(can be a circle or rectangle or any other shape), color)
    - Can have any other attributes or methods

*/