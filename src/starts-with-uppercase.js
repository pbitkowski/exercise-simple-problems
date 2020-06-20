const uppercaseFromAToZRegexp = /^[A-Z]/;

// Returns true if string starts with uppercase letter from A to Z
export default function startsWithUppercase(text) {
  if (typeof text !== "string") {
    throw new Error('Input should be string')
  }

  if (text.length === 0) { 
    return false;
  }
  
  return uppercaseFromAToZRegexp.test(text);
}
