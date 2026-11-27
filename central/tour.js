// Central tour. Each scene: [id, title, links]. Link: [targetId, yaw, label?, pitch?, arriveYaw?]
window.TOUR = {
  title: "Garage Society Central",
  first: "100642",
  floors: [{ label: "5/F", first: "100642" }],
  scenes: [
    ["100642", "Lift Lobby", [["100734", 176, "Reception"]]],
    ["100734", "Reception", [["102022", -120, "Lounge"], ["100642", 1, "Lift Lobby"]]],
    ["102022", "Lounge", [["102113", 138, "Lounge & Bar"], ["102300", -169, "Private Office"], ["100734", 68, "Reception"]]],
    ["102113", "Lounge & Bar", [["102502", 105, "Pantry"], ["102200", -161, "Private Office"], ["102300", -136, "Private Office"], ["102022", -28, "Lounge"]]],
    ["102200", "Private Office", [["102113", 15, "Lounge"]]],
    ["102300", "Private Office", [["102113", 35, "Lounge"]]],
    ["102502", "Pantry", [["102620", 7, "Offices & Meeting Rooms"], ["102113", 108, "Lounge"]]],
    ["102620", "Office Corridor", [["102800", 166], ["102113", 0, "Lounge"]]],
    ["102800", "Office Corridor", [["102848", 66, "Meeting Room A"], ["103014", 116], ["102620", -5]]],
    ["102848", "Meeting Room A", [["102800", -25, "Back to corridor"]]],
    ["103014", "Office Corridor", [["103104", -36, "Window Office"], ["103231", -168], ["102848", 90, "Meeting Room A"], ["102800", 29]]],
    ["103104", "Window Office", [["103014", 50, "Back to corridor"]]],
    ["103231", "Office Corridor", [["103319", 165, "Meeting Room B"], ["103410", -160], ["103014", -76]]],
    ["103319", "Meeting Room B", [["103231", 40, "Back to corridor"]]],
    ["103410", "Office Corridor", [["103502", 100], ["103231", -165]]],
    ["103502", "Office Corridor", [["103654", -117, "Team Office"], ["103556", -43, "Two-Desk Office"], ["104058", -170], ["103410", 6]]],
    ["103556", "Two-Desk Office", [["103502", -110, "Back to corridor"]]],
    ["103654", "Team Office", [["103502", -170, "Back to corridor"]]],
    ["104058", "Office Corridor", [["104200", -85, "Private Office"], ["104247", 102], ["103502", 10]]],
    ["104200", "Private Office", [["104058", -169, "Back to corridor"]]],
    ["104247", "Office Corridor", [["104344", -179], ["104058", 4]]],
    ["104344", "Office Corridor", [["100642", -166, "Lift Lobby"], ["104247", 11]]]
  ]
};
