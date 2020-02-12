import React from 'react';
import './App.css';

import Chart from "./Chart";

const data = [
  {
    "title": "БОССЫ",
    "tracker": "Task",
    "task_current_cost": 0,
    "estimate_time": 0,
    "work_time": 0,
    "created_at": "2019-11-22T10:28:48",
    "project_task_id": "c4542389-9051-41d7-a79a-f9459e89fd5a",
    "subtasks": [
      {
        "title": "Босс Змей",
        "tracker": "Task",
        "task_current_cost": 0,
        "estimate_time": 0,
        "work_time": 0,
        "created_at": "2019-11-22T10:27:56",
        "project_task_id": "8a264602-e6e8-42fd-92f4-ab339feec7e7",
        "subtasks": [
          {
            "title": "Босс Змей - Риггинг и скининг",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 21600000,
            "work_time": 0,
            "created_at": "2019-11-22T10:25:06",
            "project_task_id": "f57503e4-c813-4017-af23-427fe5fb1476",
            "subtasks": []
          },
          {
            "title": "Босс Змей - Анимации",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 57600000,
            "work_time": 0,
            "created_at": "2019-11-22T10:22:38",
            "project_task_id": "52580388-9869-4405-8113-9ada67930c78",
            "subtasks": []
          },
          {
            "title": "Босс Змей - Программинг",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 4,
            "work_time": 0,
            "created_at": "2019-11-23T18:01:44",
            "project_task_id": "8cb4ee42-af0b-4ba3-9fd5-548aa0ae7c9e",
            "subtasks": []
          }
        ]
      },
      {
        "title": "Босс Лев",
        "tracker": "Task",
        "task_current_cost": 0,
        "estimate_time": 0,
        "work_time": 0,
        "created_at": "2019-11-22T10:27:56",
        "project_task_id": "6de31049-767b-41df-8b5a-473aaedea9e0",
        "subtasks": [
          {
            "title": "Босс Лев - Анимации",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 57600000,
            "work_time": 0,
            "created_at": "2019-11-22T10:24:12",
            "project_task_id": "05e721f9-8386-4db0-b678-0183da829481",
            "subtasks": []
          },
          {
            "title": "Босс Лев - Программинг",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 4,
            "work_time": 0,
            "created_at": "2019-11-23T18:01:54",
            "project_task_id": "c8fc84a1-c2e7-4865-9260-200e5d07dc7f",
            "subtasks": []
          }
        ]
      },
      {
        "title": "Босс Финальный",
        "tracker": "Task",
        "task_current_cost": 0,
        "estimate_time": 0,
        "work_time": 0,
        "created_at": "2019-11-22T10:27:57",
        "project_task_id": "08d2dd7c-8fa7-4c9e-84a3-272038aadd20",
        "subtasks": [
          {
            "title": "Босс Фин - Скин+Риг",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 4,
            "work_time": 0,
            "created_at": "2019-11-22T10:26:16",
            "project_task_id": "b7260f98-8e59-49b1-8552-3fd91f07d982",
            "subtasks": []
          },
          {
            "title": "Босс Фин - Анимации",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 16,
            "work_time": 0,
            "created_at": "2019-11-22T10:25:59",
            "project_task_id": "045c8d49-a367-445f-84c0-5e0e983a9d02",
            "subtasks": []
          },
          {
            "title": "Босс Фин - Программинг\n",
            "tracker": "Task",
            "task_current_cost": 0,
            "estimate_time": 4,
            "work_time": 0,
            "created_at": "2019-11-23T18:02:04",
            "project_task_id": "8a54139b-aca4-41f3-a1c3-fb2f7f234b0a",
            "subtasks": []
          }
        ]
      }
    ]
  }
];

function App() {
  return (
    <Chart size={500} data={data}/> 
  );
}

export default App;
