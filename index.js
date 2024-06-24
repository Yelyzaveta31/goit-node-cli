import { program } from "commander";
import { addContact, getContactById, listContacts, removeContact } from "./src/contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list": {
      const contacts = await listContacts();
      console.table(contacts);
      break;
    }

    case "get": {
      if (!id) {
        console.log('Please, write ID-contact');
        return;
      }
      const contact = await getContactById(id);
      if (contact) {
        console.log(contact);
      } else {
        console.log('Contact not found');
      }
      break;}

    case "add":{
      if (!name || !email || !phone) {
        console.log(
          "Please, write name? email and phone contact"
        );
        return;
      }
      const newContact = await addContact(name, email, phone);
      console.log('Added contact:', newContact);
      break;}

    case "remove":{
      if (!id) {
        console.log('Please, write ID-contact');
        return;
      }
      const removedContact = await removeContact(id);
      if (removedContact) {
        console.table(removedContact);
      } else {
        console.log('Контакт з таким ID не знайдено');
      }

      break;}

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);