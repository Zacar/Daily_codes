// User Stories:

// You should model the ledger as an object where each device is keyed by its asset tag and has type, status, borrower (with name and email), and dueDate properties.

// You should implement a checkoutDevice(ledger, assetTag, borrower) function that takes a ledger object and clones it with serializeLedger and loadLedger, without mutating the original. On the clone, it should set the borrower object's name and email, update the status to "CheckedOut", and return an object of the form { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag and the borrower object's name.

// If assetTag does not exist in the ledger, the function should return the ledger unchanged along with a message that includes the asset tag and explains that it was not found.
// If the device is already "CheckedOut", the function should return the ledger unchanged and leave the current borrower in place, along with a message that includes the asset tag and explains that the device is already checked out.
// You should implement a checkinDevice(ledger, assetTag) function that takes a ledger object and clones it with serializeLedger and loadLedger, without mutating the original. On the clone, it should clear the borrower object's name and email, reset dueDate to "", update the status to "CheckedIn", and return an object of the form { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag.

// If assetTag does not exist in the ledger, the function should return the ledger unchanged along with a message that includes the asset tag and explains that it was not found.
// You should implement a listOverdueDevices(ledger, today) function that takes a ledger object and returns an array of the device objects that are overdue, sorted by dueDate in ascending order. A device is overdue when its status is "CheckedOut" and its dueDate is strictly before today. Both today and dueDate are strings in month/day/year order, and the month and day may or may not be zero-padded (for example, "9/5/2025" and "09/05/2025" are both valid).

// You should not use the JavaScript Date object anywhere in your code.

// You should implement a serializeLedger(ledger) function that converts the ledger object into a JSON string, and a loadLedger(json) function that converts a JSON string back into a JavaScript object.

const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(ledger) {
  return JSON.parse(ledger);
}

function checkoutDevice(ledger, assetTag, borrower) {
  const updatedLedger = loadLedger(serializeLedger(ledger));

  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device ${assetTag} was not found.`,
    };
  }

  if (updatedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device ${assetTag} is already checked out.`,
    };
  }
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;

  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} has been checked out to ${borrower.name}.`,
  };
}

function checkinDevice(ledger, assetTag) {
  const updatedLedger = loadLedger(serializeLedger(ledger));

  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device ${assetTag} was not found.`,
    };
  }

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} has been Checked In.`,
  };
}

function convertDate(date) {
  const [month, day, year] = date.split("/");
  return Number(year + month.padStart(2, "0") + day.padStart(2, "0"));
}

function listOverdueDevices(ledger, today) {
  return Object.values(ledger)
    .filter((device) => {
      return (
        device.status === "CheckedOut" &&
        convertDate(device.dueDate) < convertDate(today)
      );
    })
    .sort((a, b) => {
      return convertDate(a.dueDate) - convertDate(b.dueDate);
    });
}
