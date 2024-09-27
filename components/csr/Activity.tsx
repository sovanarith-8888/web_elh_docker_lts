import React, { useEffect } from "react";
import ImageNextUI from "../component-build/image-next-ui/ImageNextUI";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { Image, Link } from "@nextui-org/react";

const activity_1 = [
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/453879798_842984501260707_4831690729376980509_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHcs0Jb5qAtV6s0tI18i83sqDQCYp6TCpmoNAJinpMKmQ3JG-dAni_v0suzPpXdZt3iod8ClWH-Hhfzdt0uXXl3&_nc_ohc=5wmGWy_zu1sQ7kNvgGD-382&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=APZc7cmqrS1qeFi94wmv5FN&oh=00_AYBC0nKO2T80YjsUQ5OdS-USEtn4dXLQKKYVs8yI_YnJPg&oe=66F6E60F",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/453876439_842984491260708_5540310280299502843_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFA5EUBSFm3WOPgXyPay0_0huxn3YCEYVGG7GfdgIRhUV3QwPKuK7XItMdN9N8DbfI3fw62VWzyRsFWh2_DmFMB&_nc_ohc=El_OeUvNauUQ7kNvgEneWVP&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=APZc7cmqrS1qeFi94wmv5FN&oh=00_AYAv8nfrk2RqodOLYQti9ksrI9YtCV1ISmiHUWdBImu4fg&oe=66F6FD03",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/453856209_841909118034912_7806080295199431731_n.jpg?stp=c0.132.1441.1441a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFXzzjOmC7eadO74Z5CYCDmagywNvLxUBVqDLA28vFQFZYKmrNEGIwl2UNQYn_w88sm_PQYtgVCWQ0XOUW49dNZ&_nc_ohc=CiCqUrqfL8UQ7kNvgE9fnYJ&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=APZc7cmqrS1qeFi94wmv5FN&oh=00_AYBiCs4KS7fDNdDwZiP3oPwEoaPF1WJLOwkfxdq_xCcecg&oe=66F6EF2E",
];
const activity_2 = [
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/441513393_800720035487154_8241233419393599425_n.jpg?stp=c326.0.1396.1396a_dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=92e838&_nc_eui2=AeF7m_aGXORU7ud1xXAD21GgEf8JSYea3sAR_wlJh5rewDPKcbGs5bhUnDgOcwUqqhQN5u-1JHVqS3m-T6VX2hsw&_nc_ohc=FkCpgO9dNTgQ7kNvgHJYRYQ&_nc_ht=scontent.fpnh11-1.fna&oh=00_AYAld2pEQTukmcHyyLTO-3RgMKLWpX8Qm90qpqp6i3if2A&oe=66F6EEBE",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/445046002_800718945487263_5294334262477233701_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=92e838&_nc_eui2=AeGr1nmoCLQhOBGS2B9hUSMigS7o8DV5ikqBLujwNXmKSprkx0SJphqeUDbqODFb1Lo3QFN710jQSU7-HOV2SyX-&_nc_ohc=JYQs-nEGPXgQ7kNvgEoN7G0&_nc_ht=scontent.fpnh11-1.fna&oh=00_AYCJuiki540PRdPe6JDOoBLOoZKWTN_5qerkVTi8JYq0kQ&oe=66F6E4C2",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/441485264_800718748820616_8123694098926054382_n.jpg?stp=c223.0.835.835a_dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=92e838&_nc_eui2=AeG5GVXKSnsSU45yElSFoq9U89o7No3Ytmjz2js2jdi2aAIwQSGBtXidrYMCZp2W7XrSvUy7A_7OplhdWra03ZaJ&_nc_ohc=XIVnBcxD7YEQ7kNvgHBix6M&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AEwfVgx9jVWCLcwVwXoJBjA&oh=00_AYDqu7q4_pPU7-2YGNUqIvIReacA2xCmaln66BuSUcopfA&oe=66F6FD36",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/444445312_800718768820614_5879963024612139807_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=101&ccb=1-7&_nc_sid=92e838&_nc_eui2=AeEC1_v_NQpcM0ifdd4QGrolyQ7p9-d8XTPJDun353xdM8e6K_eoylT4cSiLoCmWPz8EYnz7yeKVfQuGRBYjiBVY&_nc_ohc=uy41jCxTbU8Q7kNvgGaaZLI&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AEwfVgx9jVWCLcwVwXoJBjA&oh=00_AYAksVlxQLOxH1UcPaAwbWTKe6xHQKLpFB204pNUeG8T9g&oe=66F70B09",
];
const activity_3 = [
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/96375149_3119952194789112_8307961841464639488_n.jpg?stp=c153.0.908.908a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeFi_t_IfB_8mf4FmTd21OVvmyuza6S2M1ybK7NrpLYzXLULbTMHyLFBZLLpExGABu0d6FmiB-t14mhg-xOFoKJ6&_nc_ohc=CSFG-tzEXFAQ7kNvgFqlJ-A&_nc_ht=scontent.fpnh11-2.fna&oh=00_AYD8OYrklAHUNfpOlSHEc8PwHhUNxeEK12Q85sm_BrGqcQ&oe=6705D99F",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/95830107_3119951991455799_2383022218608115712_n.jpg?stp=c142.0.927.927a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeGsjwcadnU49mOigHvtcT0pg9BXXwH5ZGiD0FdfAflkaOmRXIZcQpuur9Wk1S5kI7YDXDa4JaY7kviN4GX6Rf7I&_nc_ohc=-MKSFx-J28QQ7kNvgGzDsOW&_nc_ht=scontent.fpnh11-2.fna&oh=00_AYCjskHv7WpSKMYWcA5yFOgxWBNxgOAweeP_ZHVeu8igzA&oe=6705D303",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/95830107_3119951991455799_2383022218608115712_n.jpg?stp=c142.0.927.927a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeGsjwcadnU49mOigHvtcT0pg9BXXwH5ZGiD0FdfAflkaOmRXIZcQpuur9Wk1S5kI7YDXDa4JaY7kviN4GX6Rf7I&_nc_ohc=-MKSFx-J28QQ7kNvgGzDsOW&_nc_ht=scontent.fpnh11-2.fna&oh=00_AYCjskHv7WpSKMYWcA5yFOgxWBNxgOAweeP_ZHVeu8igzA&oe=6705D303",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/95395655_3119951841455814_8398335521104855040_n.jpg?stp=c115.0.900.900a_dst-jpg_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeGD5fAsatiGS4R7xAHO_JfUMpPf3W-lSZ0yk9_db6VJnV8E91pDyM8mvfSU-xo60tlLcvvCS4d4HhsxhzQfxC0W&_nc_ohc=lX2obLNHhFEQ7kNvgGAUhRq&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AI7q1fhtLy1xf2S6i6lG8ME&oh=00_AYAZ6i3GRXNSZQ9GbmVvE-sJ_N5cRChP0QbytQJmE9btAQ&oe=6705D8B5",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/95395658_3119951508122514_4807845060395663360_n.jpg?stp=c280.0.720.720a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeH2a5tqaxMkgAe9oMsrtCFCAX3GG7JM7hMBfcYbskzuE7FAyVwSTvZI9P7PSbe9LhQchFz_coEVkLXi9axXkimh&_nc_ohc=C3M4mmL5N6wQ7kNvgFUA9rm&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AI7q1fhtLy1xf2S6i6lG8ME&oh=00_AYAXbkzbyeDSszTR_X4zYJTSkCcQ1Pl3Ix1mV8IttyIPrA&oe=670603AA",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/95708405_3119951434789188_440403837702897664_n.jpg?stp=c280.0.720.720a_dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeHv7DbX28DgPr3FsR7OiyS5fVaBHVMmtkx9VoEdUya2TIEC4_tv3JMgwOPaJ7g_YM_ExUiE3cfHzy8ipzVqsvyX&_nc_ohc=QJPrHh1L3tEQ7kNvgGLORUa&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AI7q1fhtLy1xf2S6i6lG8ME&oh=00_AYD_fTmaSTYQiopO7CK-JASU6o_JWxRvDLBpkTQ4WRk7bw&oe=6705F4F3"
];
const activity_4 = [
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/92745539_2861500317300969_3535762020328538112_n.jpg?stp=c214.0.852.852a_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeHJ_8ccXFtPwop2f_XCepLY-JgvQWyGkGr4mC9BbIaQahlN-hIfUxb_abO7OwSrSACftod-KiFGSEcbB88QNu8k&_nc_ohc=Zrp4u5l85nIQ7kNvgH9ySg7&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AknIE_aR1Muwt93IZLNabC2&oh=00_AYBRUCK0SWVMKD4ihfu-rT4bzWTKl8VkeUQRfpx6zprKng&oe=6705E32E",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/91666708_2861500253967642_1023645093531222016_n.jpg?stp=c160.0.960.960a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeHitcyiuX14_i6gZpV17w_NWmloOHoUzkZaaWg4ehTORqkS-Y4YP0ZGeegBX2_ZEQECs3N6_1PEqTCtLftNPyZU&_nc_ohc=3gZxNUkC9coQ7kNvgF_q0Rx&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AknIE_aR1Muwt93IZLNabC2&oh=00_AYDFELwMMJXJRsvwFTfXrFNfaDw76FpPuEo_r3k4P9QJKA&oe=6705E880",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/92460857_2861500080634326_8180693838701002752_n.jpg?stp=c214.0.852.852a_dst-jpg_s552x414&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeGP_rIcoA15BW5S1K3KKfs138xQN8A_eJzfzFA3wD94nK8v_MqHZRWAwQLDSdk4UsR1KNf1lKQ9MtEgHpVLvsqY&_nc_ohc=0nyjjs80Dj0Q7kNvgEvO9UW&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AknIE_aR1Muwt93IZLNabC2&oh=00_AYBrKVxSyWEWTL9bRW4L8DNo0mmrZEdhnyt7Ygd3Pv2rtg&oe=6705FBEE",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/92232843_2861499967301004_6323488415849381888_n.jpg?stp=c160.0.960.960a_dst-jpg_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeGyqtepjwaHf4sn-rLqPQia79BV5v5r-jPv0FXm_mv6Mw5MFX201-62RJZG9GSIOTo03IzN66zEKgAqN9jAsHWr&_nc_ohc=dIliJsnhDV0Q7kNvgEJL1-9&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AknIE_aR1Muwt93IZLNabC2&oh=00_AYAesROXtAGZ5RLPBwVmoa7rFHYiD2_rjGco07ONNz8zfQ&oe=670606C1",
  "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/92552698_2861499793967688_1622501428813627392_n.jpg?stp=c214.0.852.852a_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeExie_SapfsuhSmCNwAlIR5m-VMALJ_rXKb5UwAsn-tcqKQBQNRtC1W45VJ1CYQz5lA9Al260sQWJjsBO8-vb1E&_nc_ohc=Hko8X2O1o54Q7kNvgHhy8e1&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AknIE_aR1Muwt93IZLNabC2&oh=00_AYBz4FiJZhWHIJTEz48YbCdX6rMsQORTDG64qHh4FNm_EA&oe=6705EC25",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/91908917_2861499687301032_5613715542285221888_n.jpg?stp=c214.0.852.852a_dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeFbxKS2Z-svsoLN8_jZWqzGmETbSsY0AYGYRNtKxjQBgSloS3kdwALz_eNc0rtGppTQy3pTq_17ZmIUZqgLXmmQ&_nc_ohc=Gt5sHBytjhQQ7kNvgFqmDxY&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AzIBMa7gbQo2XWu15vbERE6&oh=00_AYCQIcfhl6MdfgQcZjGslTehcBQ45KjQYm1RTrF8md6HiA&oe=6705F6CF"
];
const activity_5 = [
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87377500_2767152986735703_8526411690684710912_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeEQ7nzP-6p_tjEBL64f_OaRfK771KWozB58rvvUpajMHrhwK4-lrdgfxkhTPFR7AvhhXOJMe72WR3_83f2Lj6y_&_nc_ohc=bDmUghHqxuUQ7kNvgESfseg&_nc_ht=scontent.fpnh11-1.fna&oh=00_AYD1p-E5EIHZmKEnoGgZAg_WSJX2OMGxIX_ZsomYWE2t-A&oe=670609D4",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87609672_2767152940069041_9137272790271918080_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeF5g3Xie4n8h5VVinngoO_kg-SzEi6SWvmD5LMSLpJa-V0snZtWf6jZFUe8uGmA3riOtlSCgrGxjLrOeFtVTcVx&_nc_ohc=Ffi81wXLEGoQ7kNvgECJIJ6&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AwG_Oapu3_wXCYx3tFm6u9n&oh=00_AYB8qld27i5R0rRxQ7NXFkfKNUhNGYa3eU5VjAYkV5N4uw&oe=6705E23C",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87270867_2767152793402389_6046327901291282432_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeF0IbLTvBsYLmqwp1zVwY7_g4S3OZEagZKDhLc5kRqBkiA8giV7xOOo4ErJjdA_cvNvxzjy8uI6NBoXUM8i6_Ut&_nc_ohc=jZxJRoDMqeoQ7kNvgHtpIaF&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AwG_Oapu3_wXCYx3tFm6u9n&oh=00_AYCUTds-C3xIFYptk1ep678cRtYgHTuleAG9iplhDbahOg&oe=6705FF33",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87503699_2767152396735762_1000150608809820160_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeGPAywOq3zPQPQ-9BNghdxRo5FItpHzyHSjkUi2kfPIdItHyTA6B3oNqmNMSXAKzMAO-2jU6gkWrJX3TSf34p1b&_nc_ohc=SHPSXVkHu2sQ7kNvgFhNGNk&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AwG_Oapu3_wXCYx3tFm6u9n&oh=00_AYB7FaloHtf3U1uId3yhknq5fWc2mhlbhEgU2XvNIfADAQ&oe=6705FE02",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87062546_2767152376735764_2472754333213523968_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeF-CC4cL9Mb_ALXKORctZeJzCWrY80PbSTMJatjzQ9tJPQ8R91ZDZ6vK_mxxxnL_1b4Qr-z_SyOT4DflQ0A_vhb&_nc_ohc=1NZad-b5oN8Q7kNvgGTjAIC&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AThPRmwbCIiq2Jm3gA8fmqb&oh=00_AYAbNSZMI3nJTBuBGJhtvVlwD_e2auopTU4OhEPD5rvkyg&oe=6705FB6D",
  "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/87061331_2767152290069106_2059925920717733888_n.jpg?stp=c214.0.853.853a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=c43f2c&_nc_eui2=AeEcZoj3Uatm6gbDxW7TTFBe-khjD69SeF36SGMPr1J4XdKPXcqjWXt6vFfmYsrKRcWGQzcj6icX_Bl30BV77FAN&_nc_ohc=YEUf_DtO0NwQ7kNvgFu49id&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AThPRmwbCIiq2Jm3gA8fmqb&oh=00_AYA0B1whAFnN9qq8WlnDpQt4OM_6LRwCKT63v6N9mEqQtg&oe=670600F4"
]
const Activity = () => {
  const translator = useTranslations("activity");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 flex-wrap">
      {/* 1 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <div className="carousel carousel-center max-w-full space-x-4 ">
          {activity_1.map((value, index) => (
            <div className="carousel-item w-[90%] h-[370px] " key={index}>
              <ImageNextUI
                width={490}
                height={370}
                src={`${value}`}
                className="rounded-none w-[100%] object-cover h-full border p-1 "
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center mt-8">
          <Link
            className="hover:text-[#199249]"
            target="_blank"
            href="https://www.facebook.com/eastlandandhome/posts/pfbid0sD5Dq5CwCtEGKf21kwsumeSGHkqUky7wHbeNVepdkPHZE1w9GTem4QUYrb2e86Qkl"
          >
            <h3 className={`text-justify ${langHeader}`}>
              {translator("act_1")}
            </h3>
          </Link>


        </div>
        <small className="text-neutral-400">Saturday, August 5</small>
        <p className={`${langParagraph}`}>{translator("des_1")}</p>
      </div>
      {/* 2 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <div className="carousel carousel-center max-w-full h-[370px] space-x-4 overflow-y-hidden">
          {activity_2.map((value, index) => (
            <div className="carousel-item w-[90%] h-full  " key={index}>
              <ImageNextUI
                src={`${value}`}
                alt="activity"
                width={490}
                height={370}
                className="rounded-none w-[100%] object-cover h-full border p-1 "
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center mt-8">
          <Link
            className="hover:text-[#199249]"
            target="_blank"
            href="https://www.facebook.com/photo?fbid=800718772153947&set=a.800719482153876"
          >
            <h3 className={`text-justify ${langHeader}`}>
              {translator("act_2")}
            </h3>
          </Link>


        </div>
        <small className="text-neutral-400">Monday, May 27, 2024</small>
        <p className={`${langParagraph}`}>{translator("des_2")}</p>
      </div>
       {/* 3 */}
       <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <div className="carousel carousel-center max-w-full h-[370px] space-x-4 overflow-y-hidden">
          {activity_3.map((value, index) => (
            <div className="carousel-item w-[90%] h-full  " key={index}>
              <ImageNextUI
                src={`${value}`}
                alt="activity"
                width={490}
                height={370}
                className="rounded-none w-[100%] object-cover h-full border p-1 "
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center mt-8">
          <Link
            className="hover:text-[#199249]"
            target="_blank"
            href="https://www.facebook.com/eastlandandhome/photos/pb.100066474951239.-2207520000/3119952191455779/?type=3"
          >
            <h3 className={`text-justify ${langHeader}`}>
              {translator("act_3")}
            </h3>
          </Link>


        </div>
        <small className="text-neutral-400">Wednesday, May 6, 2020</small>
        <p className={`${langParagraph}`}>{translator("des_3")}</p>
      </div>
             {/* 4 */}
             <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <div className="carousel carousel-center max-w-full h-[370px] space-x-4 overflow-y-hidden">
          {activity_4.map((value, index) => (
            <div className="carousel-item w-[90%] h-full  " key={index}>
              <ImageNextUI
                src={`${value}`}
                alt="activity"
                width={490}
                height={370}
                className="rounded-none w-[100%] object-cover h-full border p-1 "
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center mt-8">
          <Link
            className="hover:text-[#199249]"
            target="_blank"
            href="https://www.facebook.com/photo/?fbid=2861500313967636&set=pb.100066474951239.-2207520000"
          >
            <h3 className={`text-justify ${langHeader}`}>
              {translator("act_4")}
            </h3>
          </Link>


        </div>
        <small className="text-neutral-400">Tuesday, April 7, 2020</small>
        <p className={`${langParagraph}`}>{translator("des_4")}</p>
      </div>
       {/* 4 */}
       <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <div className="carousel carousel-center max-w-full h-[370px] space-x-4 overflow-y-hidden">
          {activity_5.map((value, index) => (
            <div className="carousel-item w-[90%] h-full  " key={index}>
              <ImageNextUI
                src={`${value}`}
                alt="activity"
                width={490}
                height={370}
                className="rounded-none w-[100%] object-cover h-full border p-1 "
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center mt-8">
          <Link
            className="hover:text-[#199249]"
            target="_blank"
            href="https://www.facebook.com/eastlandandhome/photos/pb.100066474951239.-2207520000/2767152980069037/?type=3"
          >
            <h3 className={`text-justify ${langHeader}`}>
              {translator("act_5")}
            </h3>
          </Link>


        </div>
        <small className="text-neutral-400">Saturday, February 22, 2020</small>
        <p className={`${langParagraph}`}>{translator("des_5")}</p>
      </div>
    </section>
  );
};

export default Activity;
