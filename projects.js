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

  Note on colours: Safari's top bar turns grey for very light colours, so
  keep colours mid-to-dark.
*/
window.SITE = {

  mediums: [
    {id:"architecture", label:"architecture"},
    {id:"carpentry", label:"carpentry"},
  ],

  projects: [
    // ---- architecture ----
    {id:"architecture-1", medium:"architecture", name:"whananaki residence", color:"#56704f"},
    {id:"architecture-2", medium:"architecture", name:"mangawhai house", color:"#7d7562"},
    {id:"architecture-3", medium:"architecture", name:"piha bach", color:"#9a5b3a"},
    {id:"architecture-4", medium:"architecture", name:"waiheke studio", color:"#667378"},
    {id:"architecture-5", medium:"architecture", name:"karekare cabin", color:"#7c7a45"},

    // ---- carpentry ----
    {id:"carpentry-1", medium:"carpentry", name:"ply table", color:"#867350"},
    {id:"carpentry-2", medium:"carpentry", name:"totara desktop", color:"#8c5e49"},
    {id:"carpentry-3", medium:"carpentry", name:"chopping board", color:"#435c4a"},
    {id:"carpentry-4", medium:"carpentry", name:"misc carpentry", color:"#8b733d"},
    {id:"carpentry-5", medium:"carpentry", name:"oak bench", color:"#585d5c"},
    {id:"carpentry-6", medium:"carpentry", name:"kauri shelving", color:"#a0623f"},
    {id:"carpentry-7", medium:"carpentry", name:"macrocarpa stool", color:"#6a7a64"},
    {id:"carpentry-8", medium:"carpentry", name:"walnut side table", color:"#5a4234"},

    // ---- READY TO USE (hidden for now) ----
    // To show one, delete the // at the start of its line, then set its name.
    // Their pages (architecture-6.html and so on) already exist.
    // {id:"architecture-6", medium:"architecture", name:"project name", color:"#7a5c46"},
    // {id:"architecture-7", medium:"architecture", name:"project name", color:"#4d5f58"},
    // {id:"architecture-8", medium:"architecture", name:"project name", color:"#a58b5a"},
    // {id:"carpentry-9", medium:"carpentry", name:"project name", color:"#6b6f4a"},
    // {id:"carpentry-10", medium:"carpentry", name:"project name", color:"#8a4a3c"},
    // {id:"carpentry-11", medium:"carpentry", name:"project name", color:"#7a7468"},
  ]
};
