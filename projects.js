/*
  ==========================================================================
  YOUR PROJECTS  -  this is the only file you need to edit to change the menu
  ==========================================================================

  RENAME a project:   change its  name  (the page file name never changes).
  RECOLOUR a project: change its  color  (keep colours fairly dark, see note below).
  REORDER projects:   move the lines up or down (they show in this order).
  REMOVE a project:   delete its line, or put // in front of it to hide it for now.
  ADD a project:      copy a line, give it the next number for its medium
                      (e.g. architecture-6) and make a page with the same name
                      (copy any project page and rename it architecture-6.html).
  ADD a new medium:   add a line to "mediums" (e.g. {id:"furniture", label:"furniture"}),
                      then use  medium:"furniture"  and ids like furniture-1 on its projects.
                      A new tab appears automatically.

  Each project page is named after its id:  architecture-1.html, carpentry-3.html ...
  The id is only the file name; the visible name is "name" below.

  EACH PROJECT can have:
    description  the text under the title (leave a blank line for a new paragraph)
    details      a list of label/value pairs, any labels you like, different for each project:
                 [["year","2025"],["location","Whananaki"]]  or  [["materials","Macrocarpa"],["price","$450"]]
    images       a list of photo files, e.g.  images:["images/carpentry-3-1.jpg", "images/carpentry-3-2.jpg"]
                 Put the photos in an "images" folder in your repo. Leave it as [] to show grey placeholders.
                 To set the description of a photo for screen readers, use {src:"images/x.jpg", alt:"Describe it"}.
                 Add the photo's size in pixels as well and the page won't jump while it loads:
                 {src:"images/x.jpg", alt:"Describe it", w:1920, h:1080}
                 Tip: export photos about 1700px wide (JPEG, quality ~80). Straight-from-camera files are far too heavy.

  Note on colours: Safari's top bar turns grey for very light colours, so
  keep colours mid-to-dark.
*/
window.SITE = {

  mediums: [
    {id:"architecture", label:"architecture"},
    {id:"carpentry", label:"carpentry"}
  ],

  projects: [
    // ---- architecture ----
    {id:"architecture-1", medium:"architecture", name:"whananaki residence", color:"#56704f",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["location","location"],["type","type"]],
     images:[]},
    {id:"architecture-2", medium:"architecture", name:"mangawhai house", color:"#7d7562",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["location","location"],["type","type"]],
     images:[]},
    {id:"architecture-3", medium:"architecture", name:"piha bach", color:"#9a5b3a",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["location","location"],["type","type"]],
     images:[]},
    {id:"architecture-4", medium:"architecture", name:"waiheke studio", color:"#667378",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["location","location"],["type","type"]],
     images:[]},
    {id:"architecture-5", medium:"architecture", name:"karekare cabin", color:"#7c7a45",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["location","location"],["type","type"]],
     images:[]},

    // ---- carpentry ----
    {id:"carpentry-1", medium:"carpentry", name:"ply table", color:"#867350",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-2", medium:"carpentry", name:"totara desktop", color:"#8c5e49",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-3", medium:"carpentry", name:"chopping board", color:"#435c4a",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-4", medium:"carpentry", name:"misc carpentry", color:"#8b733d",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-5", medium:"carpentry", name:"oak bench", color:"#585d5c",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-6", medium:"carpentry", name:"kauri shelving", color:"#a0623f",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-7", medium:"carpentry", name:"macrocarpa stool", color:"#6a7a64",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},
    {id:"carpentry-8", medium:"carpentry", name:"walnut side table", color:"#5a4234",
     description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
     details:[["year","0000"],["materials","materials"],["price","$0"]],
     images:[]},

    // ---- READY TO USE (hidden for now) ----
    // To show one, delete the // at the start of each of its lines, then set its name.
    // Their pages (architecture-6.html and so on) already exist.
    // {id:"architecture-6", medium:"architecture", name:"project name", color:"#7a5c46",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},
    // {id:"architecture-7", medium:"architecture", name:"project name", color:"#4d5f58",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},
    // {id:"architecture-8", medium:"architecture", name:"project name", color:"#a58b5a",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},
    // {id:"carpentry-9", medium:"carpentry", name:"project name", color:"#6b6f4a",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},
    // {id:"carpentry-10", medium:"carpentry", name:"project name", color:"#8a4a3c",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},
    // {id:"carpentry-11", medium:"carpentry", name:"project name", color:"#7a7468",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},
  ]
};
