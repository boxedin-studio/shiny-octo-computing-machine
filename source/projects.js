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
    The layout repeats in threes: 1st cell landscape (16:9, like 1920x1080), 2nd and 3rd square. Any photo is cropped to fit its cell.
    A photo's EXIF data (including GPS location) is not copied into the website's versions.

  DRAWINGS (SVG from Illustrator)
    1. Save the drawing as an SVG into  source/drawings/<project-folder>/  (Illustrator: File > Save As > SVG,
       Styling "Internal CSS", Fonts "Convert to outline", and keep a viewBox / "Responsive" ticked).
    2. List it among the images, in the cell where you want it:
         {drawing:"ply-table/exploded.svg", alt:"Describe the drawing for screen readers"}
       (Text left as live text in the drawing, in any Aileron weight, shows in the website's Aileron.)
    Draw in black on white as normal. The site turns black into the page's text colour and white into the page
    colour (greys become tones in between), so a drawing always matches the project it sits in. White shapes
    are handy for hiding the lines behind them. Other colours are turned into tones as well.
    A drawing is shown whole (never cropped) in its cell, so use a 16:9 artboard in a landscape cell
    and a square artboard in a square cell. Lines keep the same thickness at every screen size.

  TEXT IN THE GRID
    A text block takes the place of a photo and fills that cell's shape (keep it short, a few lines):
         {title:"Materials", text:"Pine structural plywood, 25mm top."}
    Leave a blank line inside the text for a new paragraph, or write \n for a new line.
    A text block can also have a small legend at its bottom, in ultra light type. Use it to explain the numbers
    drawn in the drawing beside it:
         {title:"About", text:"A short note.", legend:["First part", "Second part"]}
    The two square cells always sit side by side, even on a phone, so keep text blocks short (about 100 characters).

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
    {id:"architecture-1", medium:"architecture", name:"whananaki residence", color:"#af3348",
     description:"A long, low house on timber piles above an estuary shore. Two pavilions, living on one side and three bedrooms on the other, are joined by an open breezeway, so the wind and the water pass straight through the middle.\n\nA deep verandah runs along the water side behind timber shutters that slide on a single track. Open them and the house becomes a verandah. Close them and it is a tight, dark box that can be left alone all winter.",
     details:[["year", "2025"], ["location", "Whananaki, Northland"], ["type", "Holiday house, 130 m²"], ["status", "Illustrative placeholder"]],
     images:[
       {"src": "whananaki-residence/whananaki-01-approach.jpg", "alt": "Render of the house from the road: a dark charred-timber end wall, a pale shuttered verandah and a long low roof above the estuary", "focus": "50% 50%"},
       {"title": "The idea", "text": "Two pavilions with open air between them: living on the left, bedrooms on the right.", "legend": ["Living pavilion", "Breezeway and path", "Bedroom pavilion", "Estuary edge", "Road"]},
       {"drawing": "whananaki-residence/site-plan.svg", "alt": "Site plan: the house angled on the slope between the road and the estuary, with trees, driveway and a water tank"},
       {"drawing": "whananaki-residence/floor-plan.svg", "alt": "Ground floor plan: kitchen, dining and lounge on the left, breezeway, then bunks and two bedrooms on the right, with a verandah along the water side"},
       {"title": "Section", "text": "Cut from the road to the estuary. The dashed lines are the noon sun: 31° in winter, 78° in summer.", "legend": ["Mono-pitch roof", "Stove flue", "Dining table", "Verandah deck", "Sliding shutter", "Timber piles"]},
       {"drawing": "whananaki-residence/cross-section.svg", "alt": "Cross-section from the road to the estuary: a low sloping roof, tall piles on the water side, with winter and summer sun angles"},
       {"src": "whananaki-residence/whananaki-02-water-side.jpg", "alt": "Render from the shore showing the verandah shutters in different positions above the piles", "focus": "50% 50%"},
       {"title": "Threshold", "text": "Sliding glass over a polished slab, flush with the deck. A 30 mm gap lets water run away.", "legend": ["Slab 150", "Aluminium sill", "Sliding glazing", "Stainless drip", "Deck board 140×32", "30 mm gap", "Joist 45×140", "Under-slab insulation"]},
       {"drawing": "whananaki-residence/threshold-section.svg", "alt": "Section through the sliding door threshold: aluminium sill, stainless drip, drainage gap and deck boards on joists"},
       {"drawing": "whananaki-residence/elevations.svg", "alt": "Elevations of the water side and the road side"},
       {"drawing": "whananaki-residence/eave-section.svg", "alt": "Section through the roof edge: corrugated roof, rafter, the beam that carries the shutter tracks, and a rain chain"},
       {"title": "Eave", "text": "Shutters hang from a beam under the roof edge. Rain leaves the roof along a chain.", "legend": ["Corrugated steel", "Ply sarking", "Rafter 45×200", "Track beam 2/90×190", "Roller carriage", "Hanger rod", "Shutter slat", "Rain chain"]},
       {"src": "whananaki-residence/whananaki-03-living.jpg", "alt": "Render looking along the living pavilion: a long table beside the glass, a stove at the centre and exposed rafters", "focus": "50% 50%"},
       {"drawing": "whananaki-residence/door-detail.svg", "alt": "Entry door: plan at the jamb, elevation, and section at the head"},
       {"title": "Door", "text": "A jamb plan, B elevation, C head. The cladding carries on over the leaf, so the door vanishes when shut.", "legend": ["Cladding board", "Cavity batten", "Building wrap", "Stud 45×140", "Timber jamb", "Leaf 45, boards on ply", "Pull handle", "Head flashing"]},
       {"src": "whananaki-residence/whananaki-04-aerial.jpg", "alt": "Aerial render of the house on its slope above the estuary, with the water tank and surrounding trees", "focus": "50% 50%"}
     ]},
    {id:"architecture-2", medium:"architecture", name:"mangawhai house", color:"#1f6c65",
     description:"A house made of three boxes. Two gabled boxes hold the bedrooms and the den, and a low link between them holds the kitchen and living room. Together they make a U around a paved courtyard with a single tree.\n\nFrom the street it is quiet: stained shiplap, a black steel roof and one pivot door. All the glass faces the courtyard, and a mitred corner window and a window seat bring the garden into the rooms.",
     details:[["year", "2025"], ["location", "Mangawhai, Northland"], ["type", "House, 124 m²"], ["status", "Illustrative placeholder"]],
     images:[
       {"src": "mangawhai-house/mangawhai-01-street.jpg", "alt": "Render from the street: two gabled boxes either side of a low link with a pivot front door", "focus": "50% 50%"},
       {"title": "Three boxes", "text": "Two gables and a low link, set around a courtyard. Roofs lift away to show the rooms.", "legend": ["Gabled roofs", "Rooms", "Link roof", "Courtyard"]},
       {"drawing": "mangawhai-house/three-boxes-axo.svg", "alt": "Exploded axonometric: two gabled roofs and a low link roof lifted above the walls, with the courtyard and tree between"},
       {"src": "mangawhai-house/mangawhai-02-courtyard.jpg", "alt": "Render of the courtyard at dusk, looking south through the glass wall of the living room, with the window box and the tree", "focus": "50% 50%"},
       {"title": "Plan", "text": "Three boxes around a courtyard, with a gravel court at the entry.", "legend": ["Entry porch", "Kitchen and living", "Courtyard", "Bedroom", "Workroom", "Bath and hall", "Den", "Guest and laundry"]},
       {"drawing": "mangawhai-house/floor-plan.svg", "alt": "Ground floor plan with numbered rooms: bath, hall, bedroom and workroom on the left, kitchen and living in the middle, laundry, guest room and den on the right, around the courtyard"},
       {"drawing": "mangawhai-house/long-section.svg", "alt": "Long section through all three boxes, showing two pitched roofs, the low link roof and the open doorways between them"},
       {"title": "Section", "text": "The ceilings change height as you walk through: tall, low, tall.", "legend": ["Ridge beam, ties below", "Insulated roof, ply ceiling", "Low link roof", "Glass wall to courtyard", "Doorway between boxes", "Strip footings"]},
       {"src": "mangawhai-house/mangawhai-03-den.jpg", "alt": "Render inside the den: an open timber roof with ties, a plywood ceiling and a window seat looking onto the courtyard", "focus": "50% 50%"},
       {"drawing": "mangawhai-house/north-elevation.svg", "alt": "North elevation seen from the courtyard: the corner window, the link with its glass wall, and the glazed doors of the den"},
       {"drawing": "mangawhai-house/corner-window.svg", "alt": "Corner window: section through sill and head, and a plan of the mitred glass corner with no post"},
       {"title": "Corner window", "text": "Two panes meet in a mitre with no corner post. Sections above, plan of the corner below.", "legend": ["Shiplap on cavity", "LVL lintel 90×240", "Z-flashing", "Ply soffit", "Low-E glazing", "Aluminium sill", "Insulated wall", "Mitred glass joint"]},
       {"src": "mangawhai-house/mangawhai-04-aerial.jpg", "alt": "Aerial render of the three boxes around the courtyard, with dune grass and the sea beyond", "focus": "50% 50%"},
       {"drawing": "mangawhai-house/window-seat-exploded.svg", "alt": "Exploded drawing of the window seat: roof plate, cedar cheeks, glazing, cedar floor, plywood seat and cushions"},
       {"title": "Window seat", "text": "Exploded to show each part. It faces west and catches the afternoon sun.", "legend": ["Steel roof plate", "Cedar cheeks", "Bolsters", "Loose cushion", "Ply seat, drawers", "Double glazed panel", "Cedar floor"]}
     ]},
    // {id:"architecture-3", medium:"architecture", name:"piha bach", color:"#895528",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},
    // {id:"architecture-4", medium:"architecture", name:"waiheke studio", color:"#7a2538",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},
    // {id:"architecture-5", medium:"architecture", name:"karekare cabin", color:"#3f6c1f",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["location","location"],["type","type"]],
    //  images:[]},

    // ---- carpentry ----
    {id:"carpentry-1", medium:"carpentry", name:"ply table", color:"#206f3d",
     description:"Designed and crafted to host the masses, this plywood table is both durable and aesthetic. Its 38mm profile makes it feel weighty to the touch giving it a robust feel, yet the scale and length makes it appear light and perfect for seating large crowds. Keeping its natural finish, it is coated in a polyurethane so it can withstand bumps and scrapes. Heavy damage can be sanded back and recoated easily with no difference to its appearance.",
     details:[["year","2026"],["materials","19mm Radiata Plywood"],["price","$800"]],
     images:[
       {src:"ply-table/ply-table-01-benches.jpg", alt:"Finished ply table with two matching benches in a bright dining nook", focus:"50% 55%"},
       {drawing:"ply-table/exploded-table.svg", alt:"Exploded diagram of the table: the plywood top lifted above two trapezoid leg frames, with the rail drawn out to the front"},
       {title:"About", text:"Short note about the project goes here.",
        legend:["36mm Radiata Ply Tabletop, (2 x 18mm ply, laminated)", "Solid-cut legs, same material", "Bracing, same material"]},
       {src:"ply-table/ply-table-03-underneath.jpg", alt:"Looking up at the angled legs from floor level", focus:"50% 45%"},
       {drawing:"ply-table/exploded-bench.svg", alt:"Exploded diagram of a bench: the plywood top lifted above two rectangular end frames, with the rail drawn out to the front"},
       {title:"Benches", text:"Short note about the benches goes here.",
        legend:["Bench top", "End frames", "Rail"]},
       {src:"ply-table/ply-table-06-outdoors.jpg", alt:"Table outdoors in sunlight during assembly", focus:"50% 62%"},
       {src:"ply-table/ply-table-04-grain.jpg", alt:"Close-up of the plywood top grain", focus:"50% 40%"},
       {src:"ply-table/ply-table-05-edge.jpg", alt:"Layered plywood edge and angled leg", focus:"50% 40%"}
     ]},
    {id:"carpentry-2", medium:"carpentry", name:"totara desktop", color:"#a0452e",
     description:"Coming soon.",
     details:[["status","coming soon"]],
     images:[]},
    {id:"carpentry-3", medium:"carpentry", name:"chopping board", color:"#2e639f",
     description:"Coming soon.",
     details:[["status","coming soon"]],
     images:[]},
    {id:"carpentry-4", medium:"carpentry", name:"misc carpentry", color:"#706021",
     description:"Coming soon.",
     details:[["status","coming soon"]],
     images:[]},
    {id:"carpentry-5", medium:"carpentry", name:"oak bench", color:"#8c6a14",
     description:"Coming soon.",
     details:[["status","coming soon"]],
     images:[]},
    // {id:"carpentry-6", medium:"carpentry", name:"kauri shelving", color:"#8b2a32",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},
    // {id:"carpentry-7", medium:"carpentry", name:"macrocarpa stool", color:"#25697f",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},
    // {id:"carpentry-8", medium:"carpentry", name:"walnut side table", color:"#46586a",
    //  description:"Short description of the project goes here. A sentence or two about what it is and what makes it special.",
    //  details:[["year","0000"],["materials","materials"],["price","$0"]],
    //  images:[]},

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
    // {id:"architecture-8", medium:"architecture", name:"project name", color:"#7a6230",
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
