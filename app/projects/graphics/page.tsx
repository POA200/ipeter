"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Brand Design Collections
const BRANDING_DESIGNS = [
  "Aquacoin-design.webp",
  "BitstacksBrand-design.webp",
  "STXAI-Brand-design.webp",
  "Stackswars-brand-design.webp",
  "Hero Header.png",
];

// X Headers & Headers
const X_HEADERS = [
  "IPeter x header.png",
  "Julius-XHeader.png",
  "Lio rush x header2.png",
  "Nothing Header (2).png",
  "Smoke header v2-2.png",
  "Flat header - 5.png",
];

// Social Media Posters & Flyers
const SOCIAL_POSTERS = [
  "Socials-poster-design.webp",
  "AQUACOINHiring.png",
  "Banner Announcement.png",
  "Blocklift Ann.png",
  "Giveaway Announcement.png",
  "Logo Announcement.png",
  "Testing is live.png",
  "Welcome to Aquacoinx.png",
  "1K FOLLOWERS-WALEX.png",
  "Blocklift x Flat.png",
  "Blocklift x Flat2.png",
  "CloutCoin X post 2.png",
  "CloutCoin X post 3.png",
  "CloutCoin post.png",
  "HIKI-1k.png",
  "lio rush x disc.webp",
];

// Thread Headers & Designs
const THREAD_DESIGNS = [
  "Thread-designs.webp",
  "SW THREAD HEADER A.png",
  "SW THREAD HEADER B.png",
  "SW THREAD INTRO.png",
  "SW THREAD LEXI.png",
];

// Campaign & Announcement Graphics
const CAMPAIGN_GRAPHICS = [
  "2HAZYSW.png",
  "2HAZYSW2.png",
  "2HAZYSW3.png",
  "2HAZYSW4.png",
  "2HAZYSW5.png",
  "2HAZYSW6.png",
  "2HAZYSW7.png",
  "A Christmas special Stacks Africa space.png",
  "AVAX.png",
  "AVAX2.png",
  "AVAX3.png",
  "AVAX4.png",
  "AVAX5.png",
  "Aquacoinx x Bitgert.png",
  "BITSTACKS (1).png",
  "BITSTACKS HEADER (9).png",
  "BITSTACKS LOGO (2).png",
  "BrevisxWalex - Copy.png",
  "BrevisxWalex.png",
  "BrevisxWalex1.png",
  "BrevisxWalex2.png",
  "BrevisxWalex3.png",
  "BrevisxWalex4.png",
  "BrevisxWalex5.png",
];

// Educational & Technical Graphics
const EDUCATIONAL_GRAPHICS = [
  "EnyiGranite.png",
  "EnyiGraniteEND.png",
  "EnyiGraniteHOW.png",
  "EnyiGraniteINTRO.png",
  "EnyiGraniteLINKS.png",
  "EnyiGraniteWHY.png",
  "EnyiXInfofi2.png",
  "EnyiXInfofi2CORE.png",
  "EnyiXInfofi2CORE2.png",
  "EnyiXInfofi2END.png",
  "EnyiXInfofi2END2.png",
  "EnyiXInfofi2I.png",
  "EnyiXInfofi2I1.png",
  "EnyiXInfofi2VAL.png",
  "EnyiXInfofi2VAL2.png",
  "EnyiXInfofi2WHAT.png",
  "EnyiXInfofi2WHAT2.png",
  "EnyiXInfofi2WHO.png",
  "EnyiXInfofi2WHO2.png",
  "EnyiXInfofi3.png",
  "EnyiXInfofi3i.png",
  "Enyixinfofi.png",
  "Enyixinfofibig.png",
  "Enyixinfofieli.png",
  "Enyixinfofiend.png",
  "Enyixinfofihig.png",
  "Enyixinfofiins.png",
  "Enyixinfofinear.png",
  "Enyixinfofiren.png",
  "Enyixinfofisen.png",
];

// Product & Collaboration Graphics
const PRODUCT_GRAPHICS = [
  "Facktory fun mascot 2.png",
  "Freshie2.png",
  "HIKIxXSY.png",
  "HIKIxXSYend.png",
  "HIKIxXSYpoints.png",
  "HIKIxXSYtoken.png",
  "HIKIxXSYuty.png",
  "HIKIxXSYwhat.png",
  "HazySW.png",
  "HazySW2.png",
  "HazySW3.png",
  "HikXXi.png",
  "Hiki X Benqi.png",
  "HikiCAV.png",
  "HikiDexalot WHAT.png",
  "HikiDexalot.png",
  "HikiDexalotCLOB.png",
  "HikiDexalotOPI.png",
  "HikiDexalotSPEC.png",
  "HikiEND.png",
  "HikiFAN.png",
  "HikiSPEED.png",
  "HikiTEAM.png",
  "HikiUPTOP.png",
  "HikiX 4UAI (1).png",
  "HikiX4UAI (10).png",
  "HikiX4UAI (11).png",
  "HikiX4UAI (12).png",
  "HikiX4UAI (13).png",
  "HikiX4UAI (14).png",
  "HikiX4UAI (15).png",
  "HikiX4UAI (16).png",
  "HikiX4UAI (17).png",
  "HikiX4UAI (7).png",
  "HikiX4UAI (8).png",
  "HikiX4UAI (9).png",
];

// Ecosystem & Partnership Graphics
const ECOSYSTEM_GRAPHICS = [
  "HikiXAvax (1).png",
  "HikiXAvax (2).png",
  "HikiXAvax (3).png",
  "HikiXAvax (4).png",
  "HikiXAvax (5).png",
  "HikiXAvax.png",
  "Hikiixtv.png",
  "HikixApex.png",
  "HikixAvalanche5.png",
  "HikixAvalanche5CARD.png",
  "HikixAvalanche5END.png",
  "HikixAvalanche5FIFA.png",
  "HikixAvalanche5FILM.png",
  "HikixAvalanche5HOW.png",
  "HikixAvalanche5INTRO.png",
  "HikixBloodloop.png",
  "Hikixavagree.png",
  "Hikixavagree2.png",
  "Hikixavagree3.png",
  "HikixavagreeBRIDG.png",
  "HikixavagreeEDGE.png",
  "HikixavagreeEERC.png",
  "HikixavagreeEND.png",
  "HikixavagreeENF.png",
  "HikixavagreeINTRO.png",
  "HikixavagreeSAFE.png",
  "HikixavagreeSpruce.png",
  "HikixavagreeWHY.png",
];

// Community & Event Graphics
const COMMUNITY_GRAPHICS = [
  "Hikixavaxart.png",
  "Hikixavaxcul.png",
  "Hikixavaxdefi.png",
  "Hikixavaxend.png",
  "Hikixavaxgam.png",
  "Hikixavaxlearn.png",
  "Hikixavaxlow.png",
  "Hikixavaxonch.png",
  "Hikixavaxwhat.png",
  "Hikixavaxxx.png",
  "Hikixsyntoshidog.png",
  "HikkiAVAX.png",
  "HikkiBEST.png",
  "HikkiCCHAIN.png",
  "HikkiCMICM.png",
  "HikkiEND.png",
  "HikkiGAM.png",
  "HikkiSEAM.png",
  "HikkiSUB.png",
  "OakxVelar.png",
  "OakxZest2.png",
];

// Miscellaneous & Premium Graphics
const MISC_GRAPHICS = [
  "ID_Crypto2.png",
  "IDxLEO.png",
  "IDxLEOend.png",
  "IDxLEOhow.png",
  "IDxLEOnfts.png",
  "IDxLEOorig.png",
  "IDxLEOsoci.png",
  "IDxLEOstat.png",
  "IDxLEOstxt.png",
  "IDxSW.png",
  "IDxSW2.png",
  "IDxSW3.png",
  "IDxSW4.png",
  "IDxSW5.png",
  "Javelinai end.png",
  "Javelinai help.png",
  "Javelinai intro.png",
  "Javelinai road.png",
  "Javelinai sol.png",
  "Javelinai summ.png",
  "Javelinai why.png",
  "Javelinai.png",
  "LIQ.png",
  "Lexi Wars1.png",
  "Lexi Wars2.png",
  "Lexi Wars3.png",
  "MAR.png",
  "MILE.png",
  "Modalayo.png",
  "Mr smack stickerpack.png",
  "NODE.png",
  "Oak (2).png",
  "Oak (3).png",
  "Oak X Banner2@3x.png",
  "OakZest22.png",
  "Oakst2.png",
  "Oakst3.png",
  "Oakst33.png",
  "OakstDao22.png",
  "Oakstzes.png",
  "OakxFLLAT...png",
  "OakxFLLAT2.png",
  "OakxStSTXx.png",
  "OakxStSTXxzx.png",
  "PAYG.png",
  "Predict and win M3.png",
  "Remote.png",
  "SW 2h GA top10.png",
  "SW Bounty Ann.png",
  "SW LS Ann.png",
  "SW MN LIVE.png",
  "SW MN launch.png",
  "SW Moodboard.png",
  "SW ZAD Badge.png",
  "SW available on Xverse.png",
  "StellarOrg-Hiki (1).png",
  "StellarOrg-Hiki (2).png",
  "StellarOrg-Hiki (3).png",
  "StellarOrg-Hiki (4).png",
  "StellarOrg-Hiki (5).png",
  "StellarOrg-Hiki (6).png",
  "StellarOrg-Hiki.png",
  "Spooky Stacks.png",
  "Stacks Mode.png",
  "Testing is live.png",
  "UAPxOAK.png",
  "Walex-Bittensor (1).png",
  "Walex-Bittensor (2).png",
  "Walex-Bittensor (3).png",
  "Walex-Bittensor (4).png",
  "Walex-Bittensor (5).png",
  "Walex-Bittensor (6).png",
  "Walex-Bittensor (7).png",
  "Walex-Bittensor (8).png",
  "Walex-Bittensor (9).png",
  "Walex-Bittensor.png",
  "Why AVAX with Hikmah.png",
  "Why Avax with Hikmah PS Dexalot.png",
  "Why Avax with Hikmah1.png",
  "Zest Protocoloak.png",
  "Zest Protocoloak2.png",
  "Zest Protocoloak3.png",
  "Zest Protocoloak4.png",
  "all time referral leaderboard.png",
  "flat (1).png",
  "flat.png",
  "flatxoak boost.png",
  "flatxuap.png",
  "gentle.png",
  "giveaway (1).png",
  "hikiii.png",
  "hikinewton.png",
  "hikinewtonintro.png",
  "idwagmi.png",
  "intro to avax space.png",
  "intro.png",
  "ios 26 liquid glass stacks dapps.png",
  "ipeterbtcpizza0.png",
  "ipeterstx.png",
  "leo.png",
  "oak (5).png",
  "oak flaa.png",
  "oak herma 1.png",
  "oak herma 2.png",
  "oak herma 4.png",
  "oak herma.png",
  "oak memestx.png",
  "oak..toai agen.png",
  "oak..toai aipow.png",
  "oak..toai alph.png",
  "oak..toai core.png",
  "oak..toai corere.png",
  "oak..toai end.png",
  "oakbit.png",
  "oakflat 23.png",
  "oakflatga.png",
  "oakleeoo.png",
  "oakleo.png",
  "oakmeme.png",
  "oaksb.png",
  "oakst.png",
  "oakstdao.png",
  "oakstdao2222.png",
  "oakstdao2223.png",
  "oakstdao23.png",
  "oakststxdao.png",
  "oakstx core.png",
  "oakstx end.png",
  "oakstx growth.png",
  "oakstx impact.png",
  "oakstx sbtc.png",
  "oakstx.png",
  "oakstxcity.png",
  "oakstxcityEND.png",
  "oakstxcityFEAT.png",
  "oakstxcityINTR.png",
  "oakstxxx.png",
  "oakwagmi.png",
  "oakwagmieco.png",
  "oakwagmiroadmap.png",
  "oakwagmiroadmap2.png",
  "oakwagmitokeno.png",
  "oakwagmiuse.png",
  "oakwagmiwhat.png",
  "oakwagmiwhy.png",
  "ooaakkk.png",
  "stacking dao (2).png",
  "stackingdao.png",
  "stx.png",
  "stxt features.png",
  "stxt intro.png",
  "stxt prem.png",
  "stxt why.png",
  "stxt.png",
  "stxusdhvelaroak.png",
  "tronai  ALPHA.png",
  "tronai  CODE.png",
  "tronai  INFL.png",
  "tronai  LAUN.png",
  "tronai  NOMICS.png",
  "tronai  ROAD.png",
  "tronai CORE.png",
  "tronai END.png",
  "tronai INTRO.png",
  "tronai NARR.png",
  "tronai RUGG.png",
  "tronai.png",
  "walex.png",
  "weekly referral leaderboard.png",
];

// Tab categories with their corresponding image arrays
const DESIGN_TABS = [
  {
    id: "branding",
    label: "Branding",
    description: "Brand identities and logo designs",
    images: BRANDING_DESIGNS,
  },
  {
    id: "x-headers",
    label: "X Headers",
    description: "Twitter/X header banners and designs",
    images: X_HEADERS,
  },
  {
    id: "social-posters",
    label: "Social Media",
    description: "Social media posters and promotional flyers",
    images: SOCIAL_POSTERS,
  },
  {
    id: "threads",
    label: "Threads",
    description: "Twitter thread headers and layouts",
    images: THREAD_DESIGNS,
  },
  {
    id: "campaigns",
    label: "Campaigns",
    description: "Campaign announcements and graphics",
    images: CAMPAIGN_GRAPHICS,
  },
  {
    id: "educational",
    label: "Educational",
    description: "Educational and technical visuals",
    images: EDUCATIONAL_GRAPHICS,
  },
  {
    id: "products",
    label: "Products",
    description: "Product and collaboration graphics",
    images: PRODUCT_GRAPHICS,
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    description: "Ecosystem and partnership designs",
    images: ECOSYSTEM_GRAPHICS,
  },
  {
    id: "community",
    label: "Community",
    description: "Community and event graphics",
    images: COMMUNITY_GRAPHICS,
  },
  {
    id: "miscellaneous",
    label: "All Designs",
    description: "Additional and premium graphics",
    images: MISC_GRAPHICS,
  },
];

const ITEMS_PER_PAGE = 20;

// Component for rendering a design tab with pagination
function DesignTabContent({
  images,
  tabId,
}: {
  images: string[];
  tabId: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const totalPages = Math.max(1, Math.ceil(images.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, images.length);
  const pagedImages = useMemo(
    () => images.slice(startIndex, endIndex),
    [startIndex, endIndex, images],
  );

  const paginationItems = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const items: Array<number | "ellipsis"> = [];
    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    items.push(1);
    if (left > 2) items.push("ellipsis");
    for (let page = left; page <= right; page += 1) {
      items.push(page);
    }
    if (right < totalPages - 1) items.push("ellipsis");
    items.push(totalPages);

    return items;
  }, [currentPage, totalPages]);

  // Load images only for the current tab
  useEffect(() => {
    let isActive = true;
    let loadedCount = 0;
    const totalImages = pagedImages.length;

    setIsLoading(true);

    if (totalImages === 0) {
      setIsLoading(false);
      return undefined;
    }

    pagedImages.forEach((imageName) => {
      const img = new window.Image();
      img.src = `/visuals page/${imageName}`;
      img.onload = () => {
        loadedCount += 1;
        if (isActive && loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (isActive && loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
    });

    return () => {
      isActive = false;
    };
  }, [pagedImages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top:
        document
          .querySelector(`[data-tab-id="${tabId}"]`)
          ?.getBoundingClientRect().top ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <div data-tab-id={tabId} className="w-full">
      {isLoading && (
        <div className="space-y-4">
          <div className="text-center text-sm md:text-base text-muted-foreground">
            Loading designs… please wait.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {Array.from({ length: Math.max(1, pagedImages.length) }).map(
              (_, index) => (
                <Skeleton
                  key={`skeleton-${tabId}-${index}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg"
                />
              ),
            )}
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 transition-opacity duration-500 ${
          isLoading ? "opacity-0 hidden" : "opacity-100"
        }`}
      >
        {pagedImages.map((imageName, index) => (
          <div
            key={`${tabId}-${imageName}-${index}`}
            className="group relative w-full overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full relative bg-primary/5 flex items-center justify-center overflow-hidden">
              <Image
                src={`/visuals page/${imageName}`}
                alt={`Design - ${imageName.replace(/\.(png|webp|jpg)$/i, "")}`}
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Showing {startIndex + 1}–{endIndex} of {images.length}
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    handlePageChange(Math.max(1, currentPage - 1));
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {paginationItems.map((item, index) =>
                item === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${tabId}-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={`page-${tabId}-${item}`}>
                    <PaginationLink
                      href="#"
                      isActive={item === currentPage}
                      onClick={(event) => {
                        event.preventDefault();
                        handlePageChange(item);
                      }}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    handlePageChange(Math.min(totalPages, currentPage + 1));
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default function GraphicsPage() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6 md:mb-8"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 md:mb-4">
            Visual & Graphic Design
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mb-8">
            A comprehensive showcase of brand identities, visual systems, and
            design assets crafted for Web3 projects, campaigns, and digital
            experiences.
          </p>
        </div>
      </section>

      {/* Tabbed Design Section */}
      <section className="w-full px-3 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-[2000px] mx-auto">
          <Tabs defaultValue="branding" className="w-full">
            {/* Tabs Navigation */}
            <div className="mb-8 overflow-hidden rounded-lg border border-border bg-muted/50 p-1">
              <TabsList className="w-full flex flex-wrap gap-2 bg-transparent p-0 h-auto">
                {DESIGN_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium transition-all hover:bg-background/50"
                  >
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden text-xs">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Contents */}
            {DESIGN_TABS.map((tab) => (
              <TabsContent
                key={`content-${tab.id}`}
                value={tab.id}
                className="w-full space-y-6"
              >
                {/* Tab Description */}
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                    {tab.label}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {tab.description}
                  </p>
                </div>

                {/* Design Grid with Lazy Loading */}
                <DesignTabContent images={tab.images} tabId={tab.id} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
