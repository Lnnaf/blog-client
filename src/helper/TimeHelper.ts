import moment from "moment";
export class TimeHelper {
  getRelativeTimeFromNow(createdDate: any): string {
    return moment(createdDate).fromNow();
  }

  convertHumanTime(createdDate: Date | string): string {
    return moment(createdDate).format("DD-M-yyyy");
  }
}
