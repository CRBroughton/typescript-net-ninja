
// This is a type alias
type StringOrNum = string | number;

// This is also a type alias, but is using another type alias
type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}