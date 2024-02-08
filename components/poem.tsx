"use client";

import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";

export default function PoemSection({}: {}) {
  let [isGeorgetown, setIsGeorgetown] = useState(false);
  useEffect(() => {
    (async () => {
      const req = await fetch("https://api.ipify.org?format=json");
      const json = await req.json();

      if (json.ip.startsWith("141.161")) setIsGeorgetown(true);
    })();
  }, []);

  return (
    <section>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="font-bold font-poppins text-4xl mb-3 mt-12">
          Finally, My Favorite Poem.
        </h2>
        <p className="text-lg mb-12">
          I love three poems: &apos;Do Not Go Gentle&apos;, &apos;Annabel
          Lee&apos;, and &apos;Do Not Stand At My Grave and Weep&apos;. But, by
          far &apos;{isGeorgetown ? "Annabel Lee" : "Do Not Go Gentle"}
          &apos; is my favorite.
        </p>
        <TextGenerateEffect
          paragraph={
            isGeorgetown
              ? [
                  "It was many and many a year ago,",
                  "   In a kingdom by the sea,",
                  "That a maiden there lived whom you may know",
                  "   By the name of Annabel Lee;",
                  "And this maiden she lived with no other thought",
                  "   Than to love and be loved by me.",
                  "",
                  "I was a child and she was a child,",
                  "   In this kingdom by the sea,",
                  "But we loved with a love that was more than love—",
                  "   I and my Annabel Lee—",
                  "With a love that the wingèd seraphs of Heaven",
                  "   Coveted her and me.",
                  "",
                  "And this was the reason that, long ago,",
                  "   In this kingdom by the sea,",
                  "A wind blew out of a cloud, chilling",
                  "   My beautiful Annabel Lee;",
                  "So that her highborn kinsmen came",
                  "   And bore her away from me,",
                  "To shut her up in a sepulchre",
                  "   In this kingdom by the sea.",
                  "",
                  "The angels, not half so happy in Heaven,",
                  "   Went envying her and me—",
                  "Yes!—that was the reason (as all men know,",
                  "   In this kingdom by the sea)",
                  "That the wind came out of the cloud by night,",
                  "   Chilling and killing my Annabel Lee.",
                  "",
                  "But our love it was stronger by far than the love",
                  "   Of those who were older than we—",
                  "   Of many far wiser than we—",
                  "And neither the angels in Heaven above",
                  "   Nor the demons down under the sea",
                  "Can ever dissever my soul from the soul",
                  "   Of the beautiful Annabel Lee;",
                  "",
                  "For the moon never beams, without bringing me dreams",
                  "   Of the beautiful Annabel Lee;",
                  "And the stars never rise, but I feel the bright eyes",
                  "   Of the beautiful Annabel Lee;",
                  "And so, all the night-tide, I lie down by the side",
                  "   Of my darling—my darling—my life and my bride,",
                  "   In her sepulchre there by the sea—",
                  "   In her tomb by the sounding sea.",
                ]
              : [
                  "Do not go gentle into that good night,",
                  "Old age should burn and rave at close of day;",
                  "Rage, rage against the dying of the light.",
                  "",
                  "Though wise men at their end know dark is right,",
                  "Because their words had forked no lightning they",
                  "Do not go gentle into that good night.",
                  "",
                  "Good men, the last wave by, crying how bright",
                  "Their frail deeds might have danced in a green bay,",
                  "Rage, rage against the dying of the light.",
                  "",
                  "Wild men who caught and sang the sun in flight,",
                  "And learn, too late, they grieved it on its way,",
                  "Do not go gentle into that good night.",
                  "",
                  "Grave men, near death, who see with blinding sight",
                  "Blind eyes could blaze like meteors and be gay,",
                  "Rage, rage against the dying of the light.",
                  "",
                  "And you, my father, there on the sad height,",
                  "Curse, bless, me now with your fierce tears, I pray.",
                  "Do not go gentle into that good night.",
                  "Rage, rage against the dying of the light.",
                ]
          }
        />
      </div>
    </section>
  );
}
