#KANBAN BOARD

##Description=> A Kanban board is a visual project management tool that helps teams visualize and track their work. It is typically made up of a physical or digital board that is divided into columns, each of which represents a stage in the team's workflow. The columns are usually labeled with categories like "To Do", "In Progress", and "Done".

The Kanban board is used to track work items as they move through each stage of the workflow. Each work item is represented by a card that is placed on the board, and team members can move the cards from one column to another as they work on them. This helps the team to see at a glance which tasks are in progress, which tasks are waiting, and which tasks have been completed.

Kanban boards are often used in agile software development, but they can be used in any team or project that involves workflow management. They are particularly useful for teams that want to visualize their work, identify bottlenecks, and continuously improve their processes.

##Features=> Create and manage tasks using a drag-and-drop interface

View tasks in a Kanban-style board with columns for "To Do", "In Progress", and "Done"

Edit and delete tasks as needed

Assign tasks to team members

View detailed information about each task, including its due date, priority, and description

##Data Structure

"boards": [

{
  "id": "board1",
  "title": "Computer Science",
  "columns": [
    {
      "id": "column1",
      "title": "To Do",
      "tasks": [
        {
          "id": "task1",
          "title": "Write Code for Project",
          "description": "Implement the functionality for the task page",
          "dueDate": "2023-05-12",
          "priority": "High",
         
          "tags": ["task", "Frontend"]
        },
        {
          "id": "task2",
          "title": "Fix Bug in Code",
          "description": "Fix the bug in the decription functionality",
          "dueDate": "2023-05-12",
          "priority": "Medium",
          
          "tags": ["description", "Backend"]
        }
      ]
    },
    {
      "id": "column2",
      "title": "In Progress",
      "tasks": [
        {
          "id": "task3",
          "title": "Design UI for Profile Page",
          "description": "Create a new UI for the profile page",
          "dueDate": "2023-05-12",
          "priority": "Low",
       
          "tags": ["Profile", "UI"]
        }
      ]
    },
    {
      "id": "column3",
      "title": "Done",
      "tasks": [
        {
          "id": "task4",
          "title": "Write Documentation for Project",
          "description": "Write the documentation for the entire project",
          "dueDate": "2023-05-30",
          "priority": "High",
         
          "tags": ["Documentation", "All"]
        }
      ]
    }
  ],
  "customization": {
    "color": "#F7D358",
    "tags": ["Computer Science", "Programming"]
  }
},
{
  "id": "board2",
  "title": "History",
  "columns": [
    {
      "id": "column1",
      "title": "To Do",
      "tasks": []
    },
    {
      "id": "column2",
      "title": "In Progress",
      "tasks": []
    },
    {
      "id": "column3",
      "title": "Done",
      "tasks": []
    }
  ],
  "customization": {
    "color": "#FA8072",
    "tags": ["History", "Research"]
  }
}
]

##Libraries =>

State management : Redux

Drag and drop : react-beautiful-dnd

UI Library : Material UI

Deployment : Deployment will be done on open platforms like render.com

##collaborators =>

Ankush Rai - https://github.com/Ankush123rai

Dilip Lovevanshi - https://github.com/dilip884400

Kamal Panwar - https://github.com/KamalPanwar

Nharti Zhade -