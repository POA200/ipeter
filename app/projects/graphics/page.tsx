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

// All graphics images from visuals page directory
const GRAPHICS_IMAGES = [
  "OakxVelar.png",
  "OakxZest2.png",
  "PAYG.png",
  "Predict and win M3.png",
  "Remote.png",
  "SW 2h GA top10.png",
  "SW Bounty Ann.png",
  "SW LS Ann.png",
  "SW MN LIVE.png",
  "SW MN launch.png",
  "SW Moodboard.png",
  "SW THREAD HEADER A.png",
  "SW THREAD HEADER B.png",
  "SW THREAD INTRO.png",
  "SW THREAD LEXI.png",
  "SW ZAD Badge.png",
  "SW available on Xverse.png",
  "Smoke header v2-2.png",
  "Spooky Stacks.png",
  "Stacks Mode.png",
  "Stackswars-brand-design.webp",
  "StellarOrg-Hiki (1).png",
  "StellarOrg-Hiki (2).png",
  "StellarOrg-Hiki (3).png",
  "StellarOrg-Hiki (4).png",
  "StellarOrg-Hiki (5).png",
  "StellarOrg-Hiki (6).png",
  "StellarOrg-Hiki.png",
  "Testing is live.png",
  "UAPxOAK.png",
  "1K FOLLOWERS-WALEX.png",
  "2HAZYSW.png",
  "2HAZYSW2.png",
  "2HAZYSW3.png",
  "2HAZYSW4.png",
  "2HAZYSW5.png",
  "2HAZYSW6.png",
  "2HAZYSW7.png",
  "A Christmas special Stacks Africa space.png",
  "AQUACOINHiring.png",
  "AQUACOINXHNM.png",
  "AVAX.png",
  "AVAX2.png",
  "AVAX3.png",
  "AVAX4.png",
  "AVAX5.png",
  "Aquacoinx x Bitgert.png",
  "BITSTACKS (1).png",
  "BITSTACKS HEADER (9).png",
  "BITSTACKS LOGO (2).png",
  "Banner Announcement.png",
  "Blocklift Ann.png",
  "Blocklift x Flat.png",
  "Blocklift x Flat2.png",
  "BrevisxWalex - Copy.png",
  "BrevisxWalex.png",
  "BrevisxWalex1.png",
  "BrevisxWalex2.png",
  "BrevisxWalex3.png",
  "BrevisxWalex4.png",
  "BrevisxWalex5.png",
  "CloutCoin X post 2.png",
  "CloutCoin X post 3.png",
  "CloutCoin post.png",
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
  "Facktory fun mascot 2.png",
  "Flat header - 5.png",
  "Freshie2.png",
  "Giveaway Announcement.png",
  "HIKI-1k.png",
  "HIKIxXSY.png",
  "HIKIxXSYend.png",
  "HIKIxXSYpoints.png",
  "HIKIxXSYtoken.png",
  "HIKIxXSYuty.png",
  "HIKIxXSYwhat.png",
  "HazySW.png",
  "HazySW2.png",
  "HazySW3.png",
  "Hero Header.png",
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
  "IPeter x header.png",
  "Javelinai end.png",
  "Javelinai help.png",
  "Javelinai intro.png",
  "Javelinai road.png",
  "Javelinai sol.png",
  "Javelinai summ.png",
  "Javelinai why.png",
  "Javelinai.png",
  "Julius-XHeader.png",
  "LIQ.png",
  "Lexi Wars1.png",
  "Lexi Wars2.png",
  "Lexi Wars3.png",
  "Lio rush x header2.png",
  "Logo Announcement.png",
  "MAR.png",
  "MILE.png",
  "Modalayo.png",
  "Mr smack stickerpack.png",
  "NODE.png",
  "Nothing Header (2).png",
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
  "Welcome to Aquacoinx.png",
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
  "lio rush x disc.webp",
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

const ITEMS_PER_PAGE = 40;

export default function GraphicsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.max(
    1,
    Math.ceil(GRAPHICS_IMAGES.length / ITEMS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    GRAPHICS_IMAGES.length,
  );
  const pagedImages = useMemo(
    () => GRAPHICS_IMAGES.slice(startIndex, endIndex),
    [startIndex, endIndex],
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

  useEffect(() => {
    let isActive = true;
    let loadedCount = 0;
    const totalImages = pagedImages.length;

    setIsPageLoading(true);

    if (totalImages === 0) {
      setIsPageLoading(false);
      return undefined;
    }

    pagedImages.forEach((imageName) => {
      const img = new window.Image();
      img.src = `/visuals page/${imageName}`;
      img.onload = () => {
        loadedCount += 1;
        if (isActive && loadedCount === totalImages) {
          setIsPageLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (isActive && loadedCount === totalImages) {
          setIsPageLoading(false);
        }
      };
    });

    return () => {
      isActive = false;
    };
  }, [pagedImages]);

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
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            A comprehensive showcase of brand identities, visual systems, and
            design assets crafted for Web3 projects, campaigns, and digital
            experiences.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full px-3 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-[1800px] mx-auto">
          {isPageLoading && (
            <div className="space-y-4">
              <div className="text-center text-sm md:text-base text-muted-foreground">
                Loading visuals for page {currentPage}… please wait.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {Array.from({
                  length: Math.max(1, pagedImages.length),
                }).map((_, index) => (
                  <Skeleton
                    key={`skeleton-${index}`}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 transition-opacity duration-500 ${
              isPageLoading ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
            {pagedImages.map((imageName, index) => (
              <div
                key={`${imageName}-${index}`}
                className="group relative w-full overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image Container */}
                <div className="w-full relative bg-primary/5 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/visuals page/${imageName}`}
                    alt={`Graphic design - ${imageName.replace(/\.(png|webp|jpg)$/i, "")}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Showing {startIndex + 1}–{endIndex} of {GRAPHICS_IMAGES.length}
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
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={`page-${item}`}>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
