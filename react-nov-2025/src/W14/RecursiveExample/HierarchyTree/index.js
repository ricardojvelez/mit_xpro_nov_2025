import { Employee } from '../Employee/Employee';

function HierarchyTree() {
  const data = {
    "name": "John Doe",
    "title": "CEO",
    "directReports": [
      {
        "name": "Alice",
        "title": "Manager",
        "directReports": [
          {
            "name": "Bob",
            "title": "Team Lead",
            "directReports": [
              {
                "name": "Charlie",
                "title": "Software Engineer",
                "directReports": []
              },
              {
                "name": "Diana",
                "title": "Software Engineer",
                "directReports": []
              }
            ]
          },
          {
            "name": "Eve",
            "title": "Team Lead",
            "directReports"r: [
              {
                "name": "Frank",
                "title": "Software Engineer",
                "directReports": []
              }
            ]
          }
        ]
      }
    ]
  }
  
  return (
    <Employee {...data} />
  );
}

export default HierarchyTree;
