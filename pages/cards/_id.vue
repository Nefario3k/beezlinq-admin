<template>
  <div>
    <section class="pageContent">
      <!--========================== top section  ==========================-->
      <div
        class="mb-5 card_container user__card_container no_inline user_no_line"
      >
        <!--==================== card Header  ====================-->
        <div
          class="border__bottom d-flex align-center justify-space-between gap-5"
        >
          <!-- header nd label  -->
          <aside>
            <BackLink />
          </aside>
          <!-- controls  -->
          <div class="button__controls">
            <!-- Edit Card  -->
            <Button
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              text="Edit Card"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--border)"
              contentClass="card__dropdown userBtns"
            />
            <!-- Preview Card  -->
            <Button
              @click="$refs.cardPreview.showDialogue()"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-color)"
              width="max-content"
              text="Preview Card"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--primary-color)"
              contentClass="card__dropdown userBtns"
            />
          </div>
        </div>
        <!--==================== card content area  ====================-->
        <v-row class="user_card_content">
          <div class="col-12 col-sm-6 left__side">
            <!--==================== name Info  ====================-->
            <div>
              <div class="img_context">
                <div class="img_container">
                  <img :src="card_details.avatar" alt="" />
                </div>
                <div>
                  <p class="user__title">
                    {{
                      $getFullName(
                        card_details.first_name,
                        card_details.last_name
                      )
                    }}
                  </p>
                  <p class="user__sub__title">
                    {{ card_details.job_description }}
                  </p>
                  <p class="label">{{ card_details.company_name }}</p>
                </div>
                <div class="company_logo">
                  <img :src="card_details.company_logo" alt="" />
                </div>
              </div>
            </div>
            <!--==================== socials  ====================-->
            <div>
              <p class="title__card">Social</p>
              <div style="grid-gap: 16px" class="d-flex align-center flex-wrap">
                <a
                  v-for="(social, index) in card_details.socials"
                  :key="index + 222"
                  class="social__link"
                  :href="social.url"
                  target="_blank"
                  :style="`background-color:${social.color}`"
                >
                  <img :src="userSocialLink(social.type)" :alt="social.url" />
                </a>
              </div>
            </div>
            <!--==================== contact  ====================-->
            <div>
              <p class="title__card">Contact</p>
              <div style="grid-gap: 8px" class="d-flex flex-column">
                <!-- phone_numbers -->
                <p
                  v-for="(phone, index) in card_details.phone_numbers"
                  :key="index + 2132132"
                >
                  <a
                    :href="`tel:${phone.code}${phone.number}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ({{ phone.code }}) {{ phone.number }}
                  </a>
                </p>
                <!-- email_address -->
                <p
                  v-for="(email, index) in card_details.email_address"
                  :key="index + 21321323232"
                >
                  <a
                    :href="`mailto:${email.email}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ email.email }}
                  </a>
                </p>
                <!-- website_url -->
                <p>
                  <a
                    :href="$linkCheck(card_details.website_url)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ $removeHttp(card_details.website_url) }}
                  </a>
                </p>
                <!-- address -->
                <p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {{ card_details.address }}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 right__side">
            <!--==================== about  ====================-->
            <div>
              <p class="title__card">About</p>
              <p v-html="card_details.about"></p>
            </div>
            <!--==================== services  ====================-->
            <div>
              <p class="title__card">services</p>
              <div
                :class="{ 'mb-4': index < card_details.services.length - 1 }"
                v-for="(item, index) in card_details.services"
                :key="index + 222323234444"
              >
                <p class="sub_service">{{ item.header }}</p>
                <p v-html="item.content"></p>
              </div>
            </div>
          </div>
        </v-row>
      </div>
      <!--========================== connections  ==========================-->
      <div class="card_container user__card_container no_inline user_no_line">
        <!--==================== search input  ====================-->
        <div class="search__area mb-6">
          <SearchPageConnections />
        </div>
        <!--==================== table  ====================-->
        <TablesUserConnection />
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCardPreview ref="cardPreview" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_details: {
        first_name: "adam",
        last_name: "kosher",
        job_description: "web designer",
        company_name: "Bex-it Digital Solutions",
        company_logo: "/images/logo.png",
        avatar: "/images/temp/user.jpg",
        about: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</p>`,
        phone_numbers: [
          { number: "8033495083", code: "+234" },
          { number: "8033495083", code: "+234" },
          { number: "8033495083", code: "+234" },
        ],
        email_address: [
          { email: "designer@david.com" },
          { email: "designer@david.com" },
          { email: "designer@david.com" },
        ],
        website_url: "www.david.com",
        address: "No. 9 Star Lake Street, Maitama",
        services: [
          {
            header: "Website Design",
            content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut fkork in a  use aliquam, purus sit amet</p>`,
          },
          {
            header: "Website Design",
            content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut fkork in a  use aliquam, purus sit amet</p>`,
          },
          {
            header: "Website Design",
            content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut fkork in a  use aliquam, purus sit amet</p>`,
          },
        ],
        socials: [
          { url: "whatsapp.com", color: "transparent", type: "whatsapp" },
          { url: "telegram.com", color: "transparent", type: "telegram" },
          { url: "linkedin.com", color: "transparent", type: "linkedin" },
          { url: "twitter.com", color: "transparent", type: "twitter" },
          { url: "facebook.com", color: "transparent", type: "facebook" },
          { url: "behance.com", color: "transparent", type: "behance" },
          { url: "discord.com", color: "transparent", type: "discord" },
          { url: "dribble.com", color: "transparent", type: "dribble" },
          { url: "instagram.com", color: "transparent", type: "instagram" },
          { url: "line.com", color: "transparent", type: "line" },
          { url: "medium.com", color: "transparent", type: "medium" },
          { url: "pinterest.com", color: "transparent", type: "pinterest" },
          { url: "reddit.com", color: "transparent", type: "reddit" },
          { url: "skype.com", color: "transparent", type: "skype" },
          { url: "snapchat.com", color: "transparent", type: "snapchat" },
          {
            url: "stack-overflow.com",
            color: "transparent",
            type: "stack-overflow",
          },
          { url: "stumbleupon.com", color: "transparent", type: "stumbleupon" },
          { url: "tiktok.com", color: "transparent", type: "tiktok" },
          { url: "twitch.com", color: "transparent", type: "twitch" },
          { url: "tumblr.com", color: "transparent", type: "tumblr" },
          { url: "viber.com", color: "transparent", type: "viber" },
          { url: "vimeo.com", color: "transparent", type: "vimeo" },
          { url: "weixin.com", color: "transparent", type: "weixin" },
        ],
      },
    };
  },
  methods: {
    userSocialLink(val) {
      return window.location.origin + "/svgs/socials/" + val + ".svg";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>