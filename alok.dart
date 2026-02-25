/* void main() {
  print('Hello,,, World!');
}    */

//Calculator
/*
import 'dart:io';

double add(double a, double b) {
  return a + b;
}
double sub(double a, double b) {
  return a - b;
}
double prod(double a, double b) {
  return a * b;
}
double div(double a, double b) {
  if (b == 0) {
    print("Divide by 0");
    return 0;
  }
  return a / b;
}

void main() {

  stdout.write("Input a: ");
  double a = double.parse(stdin.readLineSync()!);

  stdout.write("Input b: ");
  double b = double.parse(stdin.readLineSync()!);

  print("Your Choice 1. Add, 2. Subtract, 3. Multiply, Divide");
  stdout.write("Enter 1-4 ");
  int choice = int.parse(stdin.readLineSync()!);

  double result;
  switch (choice) {
    case 1:
      result = add(a, b);
      print("Result = $result");
      break;
    case 2:
      result = sub(a, b);
      print("Result = $result");
      break;
    case 3:
      result = prod(a, b);
      print("Result = $result");
      break;
    case 4:
      result = div(a, b);
      print("Result = $result");
      break;
    default:
      print("Invalid choice");
  }
} 
 */

//Create a base class Employee with: name basic salary Create a derived class Manager that: adds HRA = 20%
//of basic salary adds DA = 10% of basic salary calculates total salary
/*
class Employee {
  String name;
  double basicSalary;

  Employee(this.name, this.basicSalary);
}

class Manager extends Employee {
  Manager(String name, double basicSalary) : super(name, basicSalary);

  double calculateTotalSalary() {
    double hra = 0.20 * basicSalary;
    double da = 0.10 * basicSalary;
    return basicSalary + hra + da;
  }
}

*/

/* void main(){
  for(var i=0;i<10;i++){
    print('hello ${i+1}');
  }
} */

import 'dart:io';
/* 
void main() {
  /*   final time = DateTime.now();

  print(time);
  final time2 = DateTime.now();
  print(time2);
 */
  print("Put input : ");
  var readLineSync = stdin.readLineSync();
  print("the value is" + readLineSync!);
  print("the value is $readLineSync");
}
 */

//write a class  student with name branch and roll and create constructor , print student whose name is Ashish

/* class Student {
  String name;
  String branch;
  int roll;
  Student(this.name, this.branch, this.roll);
} */

/* mixin Swimmer {
  void swim() {
    print("Swimming");
  }
}
mixin Runner {
  void run() {
    print("Running");
  }
}

class Athlete with Swimmer, Runner {}
  void main() {
    Athlete a = Athlete();
    a.swim();
    a.run();
  } */



/* 
Future<String> fetchData() {
  return Future.delayed(Duration(seconds: 4), () => "Data Loader");
}

void main() async {
  print("Loading...");
  String result = await fetchData();
  print(result);
} */




