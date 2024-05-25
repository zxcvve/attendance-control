    export const lessonsFakeData = [
        { id: 1, title: 'Информатика', time: '10:00', groups: [1092] },
        { id: 2, title: 'Математика', time: '12:00', groups: [1091,1095] },
        { id: 3, title: 'Биология', time: '14:00', groups: [1095] },
    ];

    export const fakeStudents = [
        {
        group: 1095,
            studentsList : [
              { studentId: 1, name: 'Иванов Иван', isVisited:false},
              { studentId: 2, name: 'Петров Петр', isVisited:false},
              { studentId: 3, name: 'Сидоров Сидор', isVisited:false},
              { studentId: 4, name: 'Алексеев Алексей', isVisited:false},
              { studentId: 5, name: 'Николаев Николай', isVisited:false},
            ]
        },
        {
            group: 1091,
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:false},
                { studentId: 2, name: 'Петров Петр', isVisited:false},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:false},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:false},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:false},
            ]
        }
    ];

    export const fakeTeacherLessons = [
        {
            lessonId: 123,
            title:'Математика'
        },
        {
            lessonId: 124,
            title:'География'
        },
    ];

    export const fakeTeacherLessonGroups = [1091,1095];

    export const analData = [
        {
            date: '2024-04-28',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:false},
                { studentId: 2, name: 'Петров Петр', isVisited:false},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:false},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:false},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:false},
            ]
        },
        {
            date: '2024-04-30',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:false},
                { studentId: 2, name: 'Петров Петр', isVisited:true},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:false},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:false},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:false},
            ]
        },
        {
            date: '2024-05-10',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:true},
                { studentId: 2, name: 'Петров Петр', isVisited:true},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:true},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:true},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:true},
            ]
        },
        {
            date: '2024-05-12',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:true},
                { studentId: 2, name: 'Петров Петр', isVisited:true},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:true},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:true},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:true},
            ]
        },
        {
            date: '2024-05-12',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:true},
                { studentId: 2, name: 'Петров Петр', isVisited:true},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:true},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:true},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:true},
            ]
        },
        {
            date: '2024-05-12',
            studentsList : [
                { studentId: 1, name: 'Иванов Иван', isVisited:true},
                { studentId: 2, name: 'Петров Петр', isVisited:true},
                { studentId: 3, name: 'Сидоров Сидор', isVisited:true},
                { studentId: 4, name: 'Алексеев Алексей', isVisited:true},
                { studentId: 5, name: 'Николаев Пипкин', isVisited:true},
            ]
        }
    ]

    export  const fakeDates = ['2024-04-28', '2024-04-29', '2024-04-30','2024-05-1','2024-05-2','2024-05-3','2024-05-4'];