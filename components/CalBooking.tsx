"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_LINK } from "@/lib/constants";

export function CalBooking() {
  useEffect(() => {
    (async function run() {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#C97A22" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="cal-embed">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
