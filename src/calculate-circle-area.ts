function validatePositiveNumber(valueToCheck: any): void {
  if (typeof valueToCheck !== "number" || valueToCheck < 0) {
    throw new Error("Input must be a positive number");
  }
}

export default function calculateCircleArea(radius: number): number {
  validatePositiveNumber(radius);
  return Math.PI * Math.pow(radius, 2);
}
