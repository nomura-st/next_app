import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";
import * as DateUtil from "../../utils/date_utils";

/**
 * 日付
 * @param props
 * @returns
 */
const DatePick = ({
  date,
  editable = true,
}: {
  date: string | null;
  editable?: boolean;
}) => {
  const [selectedDate, setSelectedDate] = useState(DateUtil.parse(date));
  registerLocale("ja", ja); // 日本語対応
  return (
    <DatePicker
      selected={selectedDate} // 選択している日付
      dateFormat="yyyy年 MM月 dd日"
      locale="ja" // 日本語対応
      isClearable={editable} // クリア可能か？
      disabled={!editable} // 変更可能か？
      onChange={(d) => setSelectedDate(d)}
      placeholderText="未選択"
    />
  );
};

export default DatePick;
