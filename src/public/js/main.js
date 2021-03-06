window.$ = window.jQuery = require("jquery");

import InstrumentsService from "./InstrumentsService";
import InstrumentsListManager from "./InstrumentsListManager";

const instrumentsService = new InstrumentsService("/instruments/");

const instrumentsListManager = new InstrumentsListManager(".instruments-list", instrumentsService);
instrumentsListManager.init();