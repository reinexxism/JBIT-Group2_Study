const validUserNames = (names) => {
  return names.filter((name) => name.length < 10);
};

console.log(
  validUserNames([
    "mark",
    "staceysmom1978",
    "q29832128238983",
    "carrie98",
    "MoanaFan",
  ])
);
// output : [ 'mark', 'carrie98', 'MoanaFan' ]
