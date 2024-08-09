const Reviews = () => {
  return (
    <div className="mx-10 overflow-hidden py-36">
      <h2 className="mb-16 text-2xl">
        <li> Reviews</li>
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col justify-between p-8 border rounded bg-tasman text-spruce border-diana">
          <div className="flex">
            <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold">Lotte van Amsterdam</h3>
              <p className="text-sm text-diana">Volume Hair Plus</p>
            </div>
          </div>
          <p className="mt-6 text-sm font-light">
            “Onze samenwerking met TimesFour heeft onze verwachtingen ver
            overtroffen. De kwaliteit van hun werk is simpelweg uitmuntend.
            Vanaf het eerste overleg tot de uiteindelijke oplevering, was elk
            aspect van het project zorgvuldig en professioneel uitgevoerd. Hun
            oog voor detail en toewijding aan het leveren van het beste
            resultaat zijn duidelijk terug te zien in het eindproduct. We zijn
            ontzettend tevreden en kunnen TimesFour van harte aanbevelen aan
            iedereen die op zoek is naar topkwaliteit werk.”
          </p>
        </div>
        <div className="flex flex-col justify-between p-8 border rounded bg-tasman text-spruce border-diana">
          <div className="flex">
            <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold">Gerben Bakker</h3>
              <p className="text-sm text-diana">VitalSelect</p>
            </div>
          </div>
          <p className="mt-6 text-sm font-light">
            “Werken met TimesFour was een geweldige ervaring. Vanaf het eerste
            contact was het duidelijk dat we met een team van echte
            professionals te maken hadden. Ze namen de tijd om onze behoeften te
            begrijpen en werkten nauw met ons samen om onze visie te realiseren.
            Communicatie was altijd helder en efficiënt, en ze waren altijd
            beschikbaar om vragen te beantwoorden of aanpassingen door te
            voeren. Deze samenwerking heeft geleid tot een eindproduct waar we
            enorm trots op zijn. Dank aan TimesFour voor de uitstekende
            samenwerking!”
          </p>
        </div>
        <div className="flex flex-col justify-between p-8 border rounded bg-tasman text-spruce border-diana">
          <div className="flex">
            <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold">Moos Eus Etselaar</h3>
              <p className="text-sm text-diana">MoosEus</p>
            </div>
          </div>
          <p className="mt-6 text-sm font-light">
            “De samenwerking met TimesFour was niets minder dan uitstekend. Hun
            team wist precies hoe ze onze ideeën konden omzetten in een prachtig
            eindproduct. Wat deze samenwerking echt bijzonder maakte, was hun
            vermogen om soepel en efficiënt te werken, zonder ooit de kwaliteit
            uit het oog te verliezen. Ze luisterden aandachtig naar onze
            feedback en pasten waar nodig aan, wat resulteerde in een product
            dat perfect aansluit bij onze verwachtingen. Het was een plezier om
            met hen te werken en we kijken uit naar toekomstige projecten
            samen.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
