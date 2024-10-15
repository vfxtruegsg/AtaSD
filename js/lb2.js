// TASK 1

class WordCounter {
  constructor() {
    this.wordCounts = {}; // Об'єкт для зберігання слів та їх кількості
  }

  // Метод для підрахунку слів у тексті
  countWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);

    if (words) {
      words.forEach((word) => {
        this.wordCounts[word] = (this.wordCounts[word] || 0) + 1;
      });
    }
  }

  // Метод для пошуку кількості входжень конкретного слова
  searchWord(word) {
    return this.wordCounts[word.toLowerCase()] || 0;
  }

  // Метод для видалення конкретного слова з лічильника
  deleteWord(word) {
    delete this.wordCounts[word.toLowerCase()];
  }

  // Метод для отримання найбільш частих слів
  getMostFrequentWords(count) {
    const wordEntries = Object.entries(this.wordCounts); // Перетворення в масив пар [слово, кількість]

    // Сортування за кількістю входжень у порядку спадання
    wordEntries.sort((a, b) => b[1] - a[1]);

    // Повернення топ "count" найбільш частих слів
    return wordEntries.slice(0, count);
  }

  // Метод для відображення всієї структури
  display() {
    console.log(this.wordCounts);
  }
}

// Приклад використання
const counter = new WordCounter();

// Симулюємо текст
const text = `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with
nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.`;

// Підрахунок слів
counter.countWords(text);

// Відображення результатів
counter.display();

// Пошук конкретного слова
console.log(`Occurrences of "hole":`, counter.searchWord("hole"));

// Видалення слова
counter.deleteWord("hole");

// Отримання топ 5 найбільш частих слів
console.log("Top 5 most frequent words:", counter.getMostFrequentWords(5));

// TASK 2

// // Клас для вузла B-дерева
// class BTreeNode {
//   constructor(t, isLeaf = true) {
//     this.t = t; // Мінімальний ступінь
//     this.keys = []; // Масив ключів
//     this.students = []; // Масив інформації про студентів
//     this.children = []; // Масив дітей вузла
//     this.isLeaf = isLeaf; // Чи є вузол листом
//   }

//   // Вставка студента у вузол
//   insertNonFull(student) {
//     let i = this.keys.length - 1;

//     if (this.isLeaf) {
//       // Знайти позицію для нового ключа
//       while (i >= 0 && this.keys[i] > student.recordBookNumber) {
//         i--;
//       }

//       // Вставити новий ключ та студента
//       this.keys.splice(i + 1, 0, student.recordBookNumber);
//       this.students.splice(i + 1, 0, student);
//     } else {
//       // Знайти дитину для рекурсивної вставки
//       while (i >= 0 && this.keys[i] > student.recordBookNumber) {
//         i--;
//       }
//       i++;

//       // Якщо дитина заповнена, розділити її
//       if (this.children[i].keys.length === 2 * this.t - 1) {
//         this.splitChild(i);

//         // Визначити, куди вставляти після розділення
//         if (this.keys[i] < student.recordBookNumber) {
//           i++;
//         }
//       }
//       this.children[i].insertNonFull(student);
//     }
//   }

//   // Розділення дитини вузла
//   splitChild(i) {
//     let y = this.children[i];
//     let z = new BTreeNode(y.t, y.isLeaf);
//     this.children.splice(i + 1, 0, z);

//     // Переносимо середній ключ у поточний вузол
//     this.keys.splice(i, 0, y.keys[this.t - 1]);

//     // Розподіляємо ключі між y та z
//     z.keys = y.keys.splice(this.t, y.keys.length - this.t);
//     z.students = y.students.splice(this.t, y.students.length - this.t);

//     // Якщо вузол не є листом, розподіляємо також дітей
//     if (!y.isLeaf) {
//       z.children = y.children.splice(this.t, y.children.length - this.t);
//     }
//   }

//   // Пошук студента за номером залікової книжки
//   search(recordBookNumber) {
//     let i = 0;

//     while (i < this.keys.length && recordBookNumber > this.keys[i]) {
//       i++;
//     }

//     if (i < this.keys.length && recordBookNumber === this.keys[i]) {
//       return this.students[i];
//     }

//     if (this.isLeaf) {
//       return null;
//     }

//     return this.children[i].search(recordBookNumber);
//   }

//   // Відображення структури вузла
//   display(level = 0) {
//     console.log("Level", level, this.keys);
//     if (!this.isLeaf) {
//       for (let child of this.children) {
//         child.display(level + 1);
//       }
//     }
//   }

//   // Отримати всіх студентів у вузлі
//   getAllStudents() {
//     let allStudents = [...this.students];
//     if (!this.isLeaf) {
//       for (let child of this.children) {
//         allStudents = allStudents.concat(child.getAllStudents());
//       }
//     }
//     return allStudents;
//   }
// }

// // Клас B-дерева
// class BTree {
//   constructor(t) {
//     this.t = t;
//     this.root = new BTreeNode(t);
//   }

//   // Вставка нового студента
//   insert(student) {
//     if (this.root.keys.length === 2 * this.t - 1) {
//       let newNode = new BTreeNode(this.t, false);
//       newNode.children.push(this.root);
//       newNode.splitChild(0);
//       this.root = newNode;
//     }
//     this.root.insertNonFull(student);
//   }

//   // Пошук студента за номером залікової книжки
//   search(recordBookNumber) {
//     return this.root.search(recordBookNumber);
//   }

//   // Відображення структури дерева
//   display() {
//     this.root.display();
//   }

//   // Отримання студента з найвищим середнім балом
//   getBestStudent() {
//     let students = this.root.getAllStudents();
//     return students.reduce(
//       (best, student) =>
//         student.averageGrade > best.averageGrade ? student : best,
//       students[0]
//     );
//   }

//   // Отримання студента з найнижчим середнім балом
//   getWorstStudent() {
//     let students = this.root.getAllStudents();
//     return students.reduce(
//       (worst, student) =>
//         student.averageGrade < worst.averageGrade ? student : worst,
//       students[0]
//     );
//   }
// }

// // Інформація про студента
// class Student {
//   constructor(recordBookNumber, surname, initials, group, averageGrade) {
//     this.recordBookNumber = recordBookNumber;
//     this.surname = surname;
//     this.initials = initials;
//     this.group = group;
//     this.averageGrade = averageGrade;
//   }
// }

// // Тестування

// const tree = new BTree(3);
// tree.insert(new Student(1, "Ivanov", "I.I.", "CS-01", 85));
// tree.insert(new Student(2, "Petrov", "P.P.", "CS-01", 90));
// tree.insert(new Student(3, "Sidorov", "S.S.", "CS-02", 70));
// tree.insert(new Student(4, "Kuznetsov", "K.K.", "CS-02", 95));

// console.log("Структура дерева:");
// tree.display();

// console.log("Кращий студент:", tree.getBestStudent());
// console.log("Найгірший студент:", tree.getWorstStudent());

// console.log("Пошук студента за номером залікової книжки (2):", tree.search(2));
