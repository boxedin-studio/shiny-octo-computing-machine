/*
  ==========================================================================
  YOUR PROJECTS  -  this is the file you edit to change the menu and the project pages
  ==========================================================================
  After you edit it, ask Claude to rebuild the site (that turns this file into the real pages).

  RENAME a project:   change its  name.  The web address follows the name, so
                      "ply table" lives at boxedin.studio/projects/carpentry/ply-table/
                      (the old address keeps working and forwards to the new one).
                      To choose the address yourself, add  slug:"my-address"  to the project.
  RECOLOUR a project: change its  color  (keep colours fairly dark, see note below).
  REORDER projects:   move the lines up or down (they show in this order).
  REMOVE a project:   delete its lines, or put // in front of them to hide it for now.
  ADD a project:      copy a project, give it the next id for its medium (e.g. architecture-6) and a new name.
                      The page is made for you.
  ADD a new medium:   add a line to "mediums" (e.g. {id:"furniture", label:"furniture"}),
                      then use  medium:"furniture"  and ids like furniture-1 on its projects.
                      A new tab appears automatically.

  The id is only a label for you; the visible name is "name" below.

  EACH PROJECT can have:
    description  the text under the title (leave a blank line for a new paragraph)
    place        optional, e.g. "Whananaki" (shown in the page title that search engines show)
    details      a list of label/value pairs, any labels you like, different for each project:
                 [["year","2025"],["location","Whananaki"]]  or  [["materials","Macrocarpa"],["price","$450"]]
    images       the photos and text blocks, in the order they appear on the page.

  PHOTOS
    1. Put your original photos (any size, any shape) in  source/photos/<project-folder>/ . They are never changed.
    2. List them in  images  like this:
         {src:"ply-table/ply-table-01.jpg", alt:"Describe the photo for screen readers and search", focus:"50% 60%"}
       focus is optional. It chooses what stays in the frame when a photo has to be cropped:
       the first number is left-to-right, the second is top-to-bottom (50% 50% is the centre, "50% 0%" the top).
    3. Ask Claude to rebuild. The site makes a small fast copy for the page and a large copy for when someone
       clicks the photo (which shows the whole photo, uncropped).
    The layout repeats in threes: 1st cell landscape, 2nd and 3rd square. Any photo is cropped to fit its cell.
    A photo's EXIF data (including GPS location) is not copied into the website's versions.

  TEXT IN THE GRID
    A text block takes the place of a photo and fills that cell's shape (keep it short, a few lines):
         {title:"Materials", text:"Pine structural plywood, 25mm top."}
    Leave a blank line inside the text for a new paragraph.

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
     images:[
       {src:"ply-table/ply-table-01-benches.jpg", alt:"Finished ply table with two matching benches in a bright dining nook", focus:"50% 55%"},
       {src:"ply-table/ply-table-02-front.jpg", alt:"Front view of the table and benches", focus:"50% 60%"},
       {title:"Materials", text:"Short note about the materials goes here. A sentence or two."},
       {src:"ply-table/ply-table-03-underneath.jpg", alt:"Looking up at the angled legs from floor level", focus:"50% 45%"},
       {src:"ply-table/ply-table-04-grain.jpg", alt:"Close-up of the plywood top grain", focus:"50% 40%"},
       {src:"ply-table/ply-table-05-edge.jpg", alt:"Layered plywood edge and angled leg", focus:"50% 40%"},
       {src:"ply-table/ply-table-06-outdoors.jpg", alt:"Table outdoors in sunlight during assembly", focus:"50% 62%"},
       {title:"Making", text:"Short note about how it was made goes here. A sentence or two."},
       {src:"ply-table/ply-table-07-chairs.jpg", alt:"Table beside the window with velvet chairs", focus:"50% 70%"}
     ]},
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
    // Their pages are created when you rebuild the site.
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
