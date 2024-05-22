"use client"
interface Sublink {
    title:string;
    subsublinks?:string[];
}

interface NavItem {
    title: string;
    sublinks: Sublink[];
    imageUrl?:string;
  }


  
 export const NavItems: NavItem[] = [
    {
        title: "About",
        sublinks: [
          { title: "Overview" },
          { title: "History" },
          { title: "Vision" }
        ]
      },
      {
        title: "People",
        sublinks: [
          { title: "Team" },
          { title: "Partners" }
        ]
      },
      {
        title: "Projects",
        sublinks: [
          { title: "Current", subsublinks: ["Project 1", "Project 2"] },
          { title: "Past" }
        ]
      },
      {
        title: "Labs",
        sublinks: [
          { title: "Lab 1" },
          { title: "Lab 2" }
        ],
        imageUrl: "https://www.semix.iitb.ac.in/semix/wp-content/uploads/2023/04/vlsi4.jpg"
      },
      {
        title: "Newsroom",
        sublinks: [
          { title: "Press Releases" },
          { title: "News Articles" }
        ]
      },
      {
        title: "Engage",
        sublinks: [
          { title: "Events" },
          { title: "Workshops" }
        ]
      },
      {
        title: "Initiatives",
        sublinks: [
          { title: "Initiative 1" },
          { title: "Initiative 2" }
        ]
      }
  ];