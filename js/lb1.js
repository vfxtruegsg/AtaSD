// =============
// =============
// =============
// LABORATORNAYA 1
// =============
// =============
// =============

// TASK 1

// // Клас вузла двозв’язного списку
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// // Клас двозв’язного списку
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // Додавання вузла в початок списку
//   addToHead(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//   }

//   // Додавання вузла після заданого
//   addAfter(targetData, data) {
//     let current = this.head;

//     while (current) {
//       if (current.data === targetData) {
//         const newNode = new Node(data);
//         newNode.next = current.next;
//         newNode.prev = current;

//         if (current.next) {
//           current.next.prev = newNode;
//         } else {
//           this.tail = newNode;
//         }

//         current.next = newNode;
//         return;
//       }
//       current = current.next;
//     }
//   }

//   // Пошук вузла в списку
//   findNode(data) {
//     let current = this.head;

//     while (current) {
//       if (current.data === data) {
//         return current;
//       }
//       current = current.next;
//     }
//     return null;
//   }

//   // Видалення вузла
//   deleteNode(data) {
//     let current = this.head;

//     while (current) {
//       if (current.data === data) {
//         if (current.prev) {
//           current.prev.next = current.next;
//         } else {
//           this.head = current.next;
//         }

//         if (current.next) {
//           current.next.prev = current.prev;
//         } else {
//           this.tail = current.prev;
//         }

//         return;
//       }
//       current = current.next;
//     }
//   }

//   // Виведення вузлів з початку
//   printFromHead() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }

//   // Виведення вузлів з кінця
//   printFromTail() {
//     let current = this.tail;
//     while (current) {
//       console.log(current.data);
//       current = current.prev;
//     }
//   }
// }

// // Тестування
// const list = new DoublyLinkedList();
// list.addToHead(50);
// list.addToHead(20);
// list.addToHead(40);
// list.addAfter(20, 25);
// list.printFromHead(); // Виведення значень з початку
// console.log("---");
// list.printFromTail(); // Виведення значень з кінця
// list.deleteNode(50);
// console.log("---");
// list.printFromHead(); // Виведення вузла після видалення

// TASK 2

// class PriorityQueue {
//   constructor() {
//     this.heap = [];
//   }

//   // Вставлення елементу у купу
//   insert(value) {
//     this.heap.push(value);
//     this.heapifyUp();
//   }

//   // Витягування максимального елементу з купи (для max-heap)
//   remove() {
//     if (this.heap.length === 0) return null;
//     if (this.heap.length === 1) return this.heap.pop();

//     const max = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapifyDown();

//     return max;
//   }

//   // Побудова купи з невпорядкованого масиву
//   buildHeap(array) {
//     this.heap = array;
//     for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
//       this.heapifyDown(i);
//     }
//   }

//   // Сортування елементів із використанням купи (Heap Sort)
//   heapSort() {
//     const sortedArray = [];
//     while (this.heap.length > 0) {
//       sortedArray.push(this.remove());
//     }
//     return sortedArray;
//   }

//   // Виведення елементів на екран
//   print() {
//     console.log(this.heap);
//   }

//   // Допоміжний метод для підтримки властивості купи після вставлення
//   heapifyUp() {
//     let index = this.heap.length - 1;
//     while (
//       this.getParentIndex(index) >= 0 &&
//       this.heap[this.getParentIndex(index)] < this.heap[index]
//     ) {
//       this.swap(this.getParentIndex(index), index);
//       index = this.getParentIndex(index);
//     }
//   }

//   // Допоміжний метод для підтримки властивості купи після видалення
//   heapifyDown(index = 0) {
//     let largest = index;
//     const left = this.getLeftChildIndex(index);
//     const right = this.getRightChildIndex(index);

//     if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//       largest = left;
//     }

//     if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//       largest = right;
//     }

//     if (largest !== index) {
//       this.swap(index, largest);
//       this.heapifyDown(largest);
//     }
//   }

//   // Отримання індексу батьківського вузла
//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   // Отримання індексу лівого дочірнього вузла
//   getLeftChildIndex(index) {
//     return 2 * index + 1;
//   }

//   // Отримання індексу правого дочірнього вузла
//   getRightChildIndex(index) {
//     return 2 * index + 2;
//   }

//   // Обмін елементів місцями
//   swap(index1, index2) {
//     const temp = this.heap[index1];
//     this.heap[index1] = this.heap[index2];
//     this.heap[index2] = temp;
//   }
// }

// // Приклад використання:
// const pq = new PriorityQueue();
// pq.buildHeap([3, 1, 4, 1, 5, 9, 2, 6, 5, 12, 28]);
// pq.print(); // Виведе початкову купу
// pq.insert(7);
// pq.print(); // Виведе купу після вставки елементу
// console.log("Removed:", pq.remove()); // Видаляє максимальний елемент (для max-heap)
// pq.print(); // Виведе купу після видалення
// console.log("Heap sort:", pq.heapSort()); // Виведе відсортований масив

// TASK 3

// // Клас для зберігання даних про студента
// class Student {
//   constructor(lastName, firstName, middleName, major, debts) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.major = major;
//     this.debts = debts; // Масив заборгованостей (кожна заборгованість - це об'єкт з дисципліною, датою і кількістю балів)
//   }

//   // Повертає кількість заборгованостей
//   getDebtCount() {
//     return this.debts.length;
//   }

//   // Повертає середній бал за заборгованостями
//   getAverageScore() {
//     const totalPoints = this.debts.reduce((sum, debt) => sum + debt.points, 0);
//     return totalPoints / this.debts.length;
//   }

//   // Виводить інформацію про всі заборгованості студента
//   printDebts() {
//     this.debts.forEach((debt) => {
//       console.log(
//         `  Дисципліна: ${debt.subject}, Дата: ${debt.date}, Бал: ${debt.points}`
//       );
//     });
//   }
// }

// // Функція для пірамідального сортування
// function heapSort(arr, compareFunc) {
//   const n = arr.length;

//   // Побудова купи (піраміди)
//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i, compareFunc);
//   }

//   // Один за одним витягаємо елементи з купи
//   for (let i = n - 1; i >= 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]]; // Заміна кореня з останнім елементом
//     heapify(arr, i, 0, compareFunc); // Викликаємо heapify на зменшену купу
//   }
// }

// // Функція для впорядкування піраміди
// function heapify(arr, n, i, compareFunc) {
//   let largest = i;
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;

//   if (left < n && compareFunc(arr[left], arr[largest]) > 0) {
//     largest = left;
//   }

//   if (right < n && compareFunc(arr[right], arr[largest]) > 0) {
//     largest = right;
//   }

//   if (largest !== i) {
//     [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     heapify(arr, n, largest, compareFunc);
//   }
// }

// // Функція для сортування студентів за кількістю заборгованостей та середнім балом
// function sortStudents(students) {
//   heapSort(students, (a, b) => {
//     if (a.getDebtCount() !== b.getDebtCount()) {
//       return b.getDebtCount() - a.getDebtCount(); // Спочатку сортуємо за кількістю заборгованостей (зменшення)
//     } else {
//       return a.getAverageScore() - b.getAverageScore(); // Якщо кількість рівна, сортуємо за середнім балом (збільшення)
//     }
//   });
// }

// // Приклад використання
// const students = [
//   new Student("Mikaelyan", "Artur", "Tigranovich", "CS", [
//     { subject: "Math", date: "2024-09-01", points: 50 },
//     { subject: "Physics", date: "2024-09-15", points: 45 },
//     { subject: "English", date: "2024-09-20", points: 60 },
//   ]),
//   new Student("Budeyko", "Valentin", "Altksandrovich", "Math", [
//     { subject: "Math", date: "2024-09-01", points: 55 },
//   ]),
//   new Student("Semakina", "Yana", "Viktorovna", "CS", [
//     { subject: "Math", date: "2024-09-01", points: 30 },
//     { subject: "Physics", date: "2024-09-15", points: 35 },
//     { subject: "English", date: "2024-09-20", points: 40 },
//     { subject: "History", date: "2024-09-30", points: 70 },
//   ]),
// ];

// // Відфільтровуємо студентів з більш ніж 2 заборгованостями
// const filteredStudents = students.filter(
//   (student) => student.getDebtCount() > 2
// );

// // Сортуємо відфільтрованих студентів
// sortStudents(filteredStudents);

// // Виводимо результат
// filteredStudents.forEach((student) => {
//   console.log(
//     `${student.lastName} ${student.firstName} ${
//       student.middleName
//     } має ${student.getDebtCount()} заборгованості, середній бал: ${student.getAverageScore()}`
//   );
//   student.printDebts(); // Виводимо деталі заборгованостей
// });
