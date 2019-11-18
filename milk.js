/* functions for converting measurements to gallons of milk */

function calculate() {
  var n = parseFloat(document.getElementById('num').value);
  var u1 = document.getElementById('unit1')[document.getElementById('unit1').selectedIndex].value;
  var u2 = document.getElementById('unit2')[document.getElementById('unit2').selectedIndex].value;
  var answer = "";
  console.log("" + n);

  var unit = u1;
  var reverse = false;
  if (u1 == "gal") {
    unit = u2;
    reverse = true;
  }

  var sub = "";
  switch (unit) {
    case "lbs":
      answer += lbsToGal(n, reverse);
      sub = "w"; //weight
      break;
    case "m":
      answer += mToGal(n, reverse);
      sub = "d"; //distance
      break;
    case "s":
      answer += sToGal(n, reverse);
      sub = "t"; //time
      break;
    case "ft":
      answer += ftToGal(n, reverse);
      sub = "d";
      break;
    case "mi":
      answer += miToGal(n, reverse);
      sub = "d";
      break;
    case "h":
      answer += hToGal(n, reverse);
      sub = "t";
      break;
    case "gal":
      answer += n;
      break;
    default:
      answer = "Error calculating. One of the units must be gallons of milk.";
  }
  document.getElementById('answer').innerHTML = answer + " gal<sub>" + sub + "</sub>";
  console.log("answer is " + answer);
}

/* weight conversion functions */
function galToLbs(gal) {
  return 8.6 * gal;
}
function lbsToGal(lbs, rev) {
  if (rev == false) {
    return lbs / 8.6;
  } else {
    galToLbs(lbs);
  }
}

/* distance conversion functions */
function galToM(gal) {
  return 2.286 * gal;
}
function mToGal(m, rev) {
  if (rev == false) {
    return m / 2.286;
  } else {
    return galToM(m);
  }
}

function galToFt(gal) {
  return galToM(gal) * 3.28;
}
function ftToGal(ft, rev) {
  if (rev == false) {
    return mToGal(ft / 3.28);
  } else {
    return galToFt(ft);
  }
}

function galToMi(gal) {
  return galToM(gal) / 1609.344;
}
function miToGal(mi, rev) {
  if (rev == false) {
    return mToGal(1609.344 * mi);
  } else {
    return galToMi(mi);
  }
}

/* speed conversion functions */
function galToS(gal) {
  return 1.74 * gal;
}
function sToGal(s, rev) {
  if (rev == false) {
    return s / 1.74;
  } else {
    return galToS(s);
  }
}

function galToH(gal) {
  return galToS(gal) / 3600;
}
function hToGal(h, rev) {
  if (rev == false) {
    return sToGal(h * 3600);
  } else {
    return galToH(h);
  }
}

/* complex functions */
function gpgToMph(gpg) {
  return galToMi(hToGal(gpg));
}
function mphToGpg(mph, rev) {
  if (rev == false) {
    return galToH(miToGal(mph));
  } else {
    return gpgToMph(mph);
  }
}
