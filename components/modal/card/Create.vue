<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      :persistent="persistent"
      :max-width="926"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="card__create">
          <!--========================= header  =========================-->
          <header>
            <div class="left__wing">
              <h2>Create Card</h2>
            </div>
            <ModalClose @closeModal="closeAll" />
          </header>
          <!--==================== tab area  ====================-->
          <!-- control  -->
          <div class="mb-0 tabsArea user userTab less__gutter">
            <v-tabs
              center-active
              :show-arrows="false"
              v-model="tabIndicator"
              background-color="transparent"
              color="var(--primary-dark-color)"
              :hide-slider="false"
              class="v_tabs_wrapper"
            >
              <v-tab
                v-for="item in tabItems"
                :key="item"
                class="v_tabs_items"
                :ripple="false"
              >
                <span>{{ item }}</span>
              </v-tab>
            </v-tabs>
          </div>
          <!-- tab items  -->
          <v-tabs-items
            v-model="tabIndicator"
            class="tab__items project_single_tab m-0 p-0"
          >
            <!--====================== Select Template ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <h3>Templates</h3>
                <v-row>
                  <div
                    v-for="n in 10"
                    :key="n + 33121212"
                    class="col-sm-2 col-md-4 col-12"
                  >
                    <div
                      class="card_container no_inline templates_container create__temp__container"
                    >
                      <!-- image  -->
                      <div class="temp_img_wrapper">
                        <div class="image__box">
                          <img src="/images/temp/templates/1.png" alt="" />
                        </div>
                      </div>
                      <!-- conent  -->
                      <div class="template__content">
                        <!-- content data  -->
                        <div>
                          <div>
                            <p class="label">Personal</p>
                            <p class="title_temp">Green Temp</p>
                          </div>
                          <p class="tag">
                            <span>free</span>
                          </p>
                        </div>
                        <!-- action  -->
                        <Button
                          @click="temp = n"
                          :elevation="0"
                          :outlined="true"
                          textColor="var(--primary-dark-color)"
                          :text="`${temp === n ? 'Selected' : 'Select Card'}`"
                          width="11rem"
                          height="3rem"
                          color="var(--border)"
                          :contentClass="`card__dropdown ${
                            temp === n ? 'active' : ''
                          }`"
                        />
                      </div>
                    </div>
                  </div>
                </v-row>
              </div>
            </v-tab-item>
            <!--====================== Card Setup ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <section class="input__card">
                  <p class="title__card bordered">SetUp Card</p>
                  <v-row class="input__row">
                    <!-- Card Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_name" class="input_label"
                        >Card Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_name"
                        placeholder="Enter card Name"
                      />
                    </div>
                    <!-- Select Industry  -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_industry" class="input_label"
                        >Select Industry</label
                      >
                      <select
                        class="form-control select_field"
                        id="create_card_industry"
                        value="Legal"
                      >
                        <option value="Legal">Legal</option>
                        <option value="User needs some milk">
                          User needs some milk
                        </option>
                        <option value="Legal">Legal</option>
                      </select>
                    </div>
                  </v-row>
                </section>
              </div>
            </v-tab-item>
            <!--====================== Personal Details ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <!-- Personal Information -->
                <section class="input__card">
                  <p class="title__card bordered">Personal Information</p>
                  <v-row class="input__row">
                    <!-- First Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_first_name" class="input_label"
                        >First Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_first_name"
                        placeholder="Enter First Name"
                        value="John"
                        disabled
                      />
                    </div>
                    <!-- Last Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_Last_name" class="input_label"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_Last_name"
                        placeholder="Enter Last Name"
                        value="Doe"
                        disabled
                      />
                    </div>
                    <!-- Job Description -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_job_desc" class="input_label"
                        >Job Description</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_job_desc"
                        placeholder="Enter Job Description"
                      />
                    </div>
                    <!-- Company Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_company_name" class="input_label"
                        >Company Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_company_name"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    <!-- Image (optional) -->
                    <div class="col-12 pb-1">
                      <label for="create_card_imge" class="input_label"
                        >Image <span>(optional)</span></label
                      >
                      <DragDrop
                        :svg="true"
                        :maxSize="1"
                        svgVal="SvgImageLarge"
                        contentClass="mt-2 image__drop"
                      />
                    </div>
                  </v-row>
                </section>
                <!-- Contact Information -->
                <section class="mt-5 input__card">
                  <p class="title__card bordered">Contact Information</p>
                  <!-- Phone Number -->
                  <p class="title__card mb-1">Phone Number</p>
                  <v-row class="input__row">
                    <div
                      v-for="n in 3"
                      :key="n + 2121212"
                      class="col-12 col-md-4"
                    >
                      <div class="relative phone__input">
                        <v-menu :nudge-bottom="9" offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              :elevation="0"
                              :ripple="false"
                              color="transparent"
                              class="input__btn"
                            >
                              <div class="content">
                                <img src="/images/temp/flags/4.png" alt="" />
                                <span>+234</span>
                                <div>
                                  <SvgAngleDown />
                                </div>
                              </div>
                            </v-btn>
                          </template>
                          <v-list
                            min-width="115"
                            class="dropdown__list userDropDown"
                          >
                            <v-list-item class="dropdown__list-item">
                              <v-list-item-content>
                                <v-list-item-title class="dropdown__list-title"
                                  >234</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="dropdown__list-item">
                              <v-list-item-content>
                                <v-list-item-title class="dropdown__list-title"
                                  >234</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                        <input
                          type="number"
                          required
                          class="form-control input_field"
                          placeholder="Enter number"
                        />
                      </div>
                    </div>
                  </v-row>
                  <!-- Email Address -->
                  <p class="title__card mb-1 mt-3">Email Address</p>
                  <v-row class="input__row">
                    <div
                      v-for="n in 3"
                      :key="n + 33545545"
                      class="col-12 col-md-4"
                    >
                      <input
                        type="email"
                        required
                        class="form-control input_field"
                        placeholder="Enter email"
                      />
                    </div>
                  </v-row>
                  <!-- Web Address -->
                  <p class="title__card mb-1 mt-3">Web Address</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="url"
                        required
                        class="form-control input_field"
                        placeholder="Enter url"
                      />
                    </div>
                  </v-row>
                  <!-- Location Address -->
                  <p class="title__card mb-1 mt-3">Location Address</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-1">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Start typing"
                      />
                    </div>
                  </v-row>
                </section>
                <!-- Social Links -->
                <section class="mt-5 input__card">
                  <p class="title__card bordered">Social Links</p>
                  <!-- tab container  -->
                  <div class="user_add_socials_container">
                    <v-tabs-items
                      class="project_single_tab m-0 p-0"
                      style="
                        max-width: 95%;
                        height: 100%;
                        margin-inline: auto !important;
                      "
                      v-model="tabIndicator_social"
                    >
                      <v-tab-item class="tab_item p-0 m-0">
                        <div class="socials_icons_wrapper">
                          <label
                            :for="`socialInput${items.icon}`"
                            disabled="true"
                            v-for="(items, index) in socials.slice(0, 9)"
                            :key="index + 2000"
                            style="margin: 0"
                            class="socials_icon"
                            :id="`${items.icon}`"
                            :class="{
                              activeSocial: nav === index,
                              inactiveSocial: addSocialInput,
                            }"
                            @click="showAddSocialInput(1, index, items)"
                          >
                            <div class="social__icon">
                              <img
                                :src="userSocialLink(items.icon)"
                                :alt="items.name"
                              />
                            </div>
                            <span>{{ items.name }}</span>
                          </label>
                        </div>
                      </v-tab-item>
                      <v-tab-item class="tab_item p-0 m-0">
                        <div class="socials_icons_wrapper">
                          <label
                            :for="`socialInput${items.icon}`"
                            v-for="(items, index) in socials.slice(9, 18)"
                            :key="index + 3000"
                            style="margin: 0"
                            class="socials_icon"
                            :class="{
                              activeSocial: nav2 === index,
                              inactiveSocial: addSocialInput,
                            }"
                            @click="showAddSocialInput(2, index, items)"
                          >
                            <div class="social__icon">
                              <img
                                :src="userSocialLink(items.icon)"
                                :alt="items.name"
                              />
                            </div>
                            <span>{{ items.name }}</span>
                          </label>
                        </div>
                      </v-tab-item>
                      <v-tab-item class="tab_item p-0 m-0">
                        <div class="socials_icons_wrapper">
                          <label
                            :for="`socialInput${items.icon}`"
                            v-for="(items, index) in socials.slice(
                              18,
                              socials.length
                            )"
                            :key="index + 4000"
                            style="margin: 0"
                            class="socials_icon"
                            :class="{
                              activeSocial: nav3 === index,
                              inactiveSocial: addSocialInput,
                            }"
                            @click="showAddSocialInput(3, index, items)"
                          >
                            <div class="social__icon">
                              <img
                                :src="userSocialLink(items.icon)"
                                :alt="items.name"
                              />
                            </div>
                            <span>{{ items.name }}</span>
                          </label>
                        </div>
                      </v-tab-item>
                    </v-tabs-items>
                    <!-- next tab controler  -->
                    <div
                      v-show="tabIndicator_social < 2"
                      @click="tabIndicator_social++"
                      class="controler socials_next_wrapper"
                    >
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <!-- prev tabIndicator_social controler  -->
                    <div
                      v-show="tabIndicator_social > 0"
                      @click="tabIndicator_social--"
                      class="controler socials_prev_wrapper"
                    >
                      <i class="fa-solid fa-chevron-left"></i>
                    </div>
                  </div>
                  <!-- create form inputs -->
                  <form
                    @submit.prevent="addNewLocalSocial(0)"
                    class="socialForm"
                    v-if="addSocialInput"
                  >
                    <div class="social_input_wrapper">
                      <div class="social__icon">
                        <img
                          :src="userSocialLink(newSocials.type)"
                          :alt="newSocials.type"
                        />
                      </div>
                      <input
                        v-if="newSocials.type != 'whatsapp'"
                        :id="`socialInput${newSocials.type}`"
                        type="text"
                        required
                        v-model="newSocials.val"
                        :placeholder="newSocials.placeholder"
                        autocomplete="off"
                        class="form-control input_field"
                      />
                      <div
                        v-if="newSocials.type == 'whatsapp'"
                        class="relative phone__input"
                      >
                        <v-menu :nudge-bottom="9" offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              :elevation="0"
                              :ripple="false"
                              color="transparent"
                              class="input__btn"
                            >
                              <div class="content">
                                <img src="/images/temp/flags/4.png" alt="" />
                                <span>+234</span>
                                <div>
                                  <SvgAngleDown />
                                </div>
                              </div>
                            </v-btn>
                          </template>
                          <v-list
                            min-width="115"
                            class="dropdown__list userDropDown"
                          >
                            <v-list-item class="dropdown__list-item">
                              <v-list-item-content>
                                <v-list-item-title class="dropdown__list-title"
                                  >234</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="dropdown__list-item">
                              <v-list-item-content>
                                <v-list-item-title class="dropdown__list-title"
                                  >234</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                        <input
                          @click="
                            inputValidation('socialInput' + newSocials.type)
                          "
                          class="form-control input_field socialInputwhatsapp"
                          id="socialInputwhatsapp"
                          required
                          type="text"
                          v-model="newSocials.val"
                          :placeholder="`Enter users ${newSocials.type} number!`"
                          autocomplete="off"
                        />
                      </div>
                      <v-tooltip
                        v-if="newSocials.val"
                        right
                        nudge-right="6"
                        nudge-top="3"
                        color="var(--bg-dark)"
                        transition="fade-transition"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <div
                            v-if="newSocials.val"
                            v-bind="attrs"
                            v-on="on"
                            @click="newSocials.val = ''"
                            class="closeModal clear_input_field"
                          >
                            <Button
                              :elevation="0"
                              style="padding: 0; margin-left: auto"
                              class="p-0 m-0 close_mark"
                              :svg="true"
                              :ripple="false"
                              svgLeft="SvgXmark"
                              width="max-content"
                              minWidth="max-content"
                              height="max-content"
                              color="transparent"
                            />
                          </div>
                        </template>
                        <div>Clear</div>
                      </v-tooltip>
                    </div>
                    <div v-if="newSocials.val" class="text-right mt-3">
                      <Button
                        type="submit"
                        :elevation="0"
                        height="5rem"
                        minWidth="15.4rem"
                        color="var(--primary-color)"
                        text="Add"
                      />
                    </div>
                  </form>
                </section>
                <!-- Added socials -->
                <section v-if="social.length" class="transIn mt-5 input__card">
                  <p class="title__card bordered">Added socials</p>
                  <!-- all added socials  -->
                  <div class="added_socials_wrapper">
                    <div class="added_socials">
                      <div
                        v-for="(social_link, index) in social"
                        :key="index + 23232990"
                        class="added_socials_icons"
                      >
                        <v-tooltip
                          top
                          nudge-top="10"
                          :disabled="toolTipDisabled === index"
                          transition="fade-transition"
                          color="var(--bg-dark)"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <div
                              @click="showSocialUpdateInput(index)"
                              v-bind="attrs"
                              v-on="on"
                              class="social__icon"
                            >
                              <img
                                :src="userSocialLink(social_link.type)"
                                :alt="social_link.type"
                              />
                            </div>
                          </template>
                          <div>
                            {{ social_link.url }}
                          </div>
                        </v-tooltip>
                        <div
                          @click="
                            deleteSocial(index, social_link.social_link_id)
                          "
                          class="deleteSocial"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.75 3.5H2.91667H12.25"
                              stroke="red"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.0807 3.50033V11.667C11.0807 11.9764 10.9578 12.2732 10.739 12.492C10.5202 12.7107 10.2235 12.8337 9.91406 12.8337H4.08073C3.77131 12.8337 3.47456 12.7107 3.25577 12.492C3.03698 12.2732 2.91406 11.9764 2.91406 11.667V3.50033M4.66406 3.50033V2.33366C4.66406 2.02424 4.78698 1.72749 5.00577 1.5087C5.22456 1.28991 5.52131 1.16699 5.83073 1.16699H8.16406C8.47348 1.16699 8.77023 1.28991 8.98902 1.5087C9.20781 1.72749 9.33073 2.02424 9.33073 2.33366V3.50033"
                              stroke="red"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.83594 6.41699V9.91699"
                              stroke="red"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.16406 6.41699V9.91699"
                              stroke="red"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </v-tab-item>
            <!--====================== About & Services ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <!-- About Me -->
                <section class="input__card">
                  <p class="title__card bordered">About Me</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-1">
                      <client-only>
                        <VueEditor
                          placeholder="Enter bio here"
                          :editorOptions="$emptyEditorToolbar()"
                        />
                      </client-only>
                    </div>
                  </v-row>
                </section>
                <!-- Services -->
                <section class="mt-5 input__card">
                  <p class="title__card bordered">Services</p>
                  <!-- Service 1 -->
                  <p class="title__card mb-1">Service 1</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-0">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 1 title"
                      />
                    </div>
                    <div class="col-12">
                      <client-only>
                        <VueEditor
                          placeholder="Enter service description here"
                          :editorOptions="$emptyEditorToolbar()"
                        />
                      </client-only>
                    </div>
                  </v-row>
                  <!-- Service 2 -->
                  <p class="title__card mb-1 mt-3">Service 2</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-0">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 2 title"
                      />
                    </div>
                    <div class="col-12">
                      <client-only>
                        <VueEditor
                          placeholder="Enter service description here"
                          :editorOptions="$emptyEditorToolbar()"
                        />
                      </client-only>
                    </div>
                  </v-row>
                  <!-- Service 3 -->
                  <p class="title__card mb-1 mt-3">Service 3</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-0">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 3 title"
                      />
                    </div>
                    <div class="col-12">
                      <client-only>
                        <VueEditor
                          placeholder="Enter service description here"
                          :editorOptions="$emptyEditorToolbar()"
                        />
                      </client-only>
                    </div>
                  </v-row>
                </section>
              </div>
            </v-tab-item>
            <!--====================== Gallery ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <!--==================== tab area  ====================-->
                <!-- control  -->
                <div
                  style="width: max-content"
                  class="mb-4 tabsArea user condensed"
                >
                  <v-tabs
                    center-active
                    :show-arrows="false"
                    v-model="tabIndicator_gallery"
                    background-color="var(--bg-light9)"
                    color="var(--primary-dark-color)"
                    :hide-slider="true"
                    class="v_tabs_wrapper"
                  >
                    <v-tab
                      v-for="(item, id) in tabItems__gallery"
                      :key="id + 888"
                      class="v_tabs_items"
                      :ripple="false"
                    >
                      <Component :is="item.icon" />
                      <span>{{ item.label }}</span>
                    </v-tab>
                  </v-tabs>
                </div>

                <v-tabs-items
                  v-model="tabIndicator_gallery"
                  class="project_single_tab m-0 p-0"
                >
                  <!--====================== photos ======================-->
                  <v-tab-item class="tab_item m-0 p-0">
                    <!-- Photos -->
                    <section class="input__card">
                      <p class="title__card bordered">Photos</p>
                      <v-row class="input__row">
                        <div class="col-12 pb-0">
                          <input
                            type="text"
                            required
                            class="form-control input_field"
                            placeholder="Title of Image"
                          />
                        </div>
                        <div class="col-12 pb-1">
                          <DragDrop
                            @inputValues="
                              (val) => {
                                selected__images = [
                                  ...selected__images,
                                  ...val,
                                ];
                              }
                            "
                            :svg="true"
                            :maxSize="2"
                            svgVal="SvgImageUpload"
                          />
                        </div>
                        <div class="col-12 pb-1 text-right">
                          <Button
                            :elevation="0"
                            height="5rem"
                            minWidth="20.4rem"
                            color="var(--primary-color)"
                            text="Add Photo"
                          />
                        </div>
                      </v-row>
                    </section>

                    <section class="photos_area mt-3">
                      <v-row class="input__row all">
                        <div
                          v-for="(items, id) in selected__images"
                          :key="id + 2132344"
                          class="col-12 col-sm-6 col-md-4 selected__images__area"
                        >
                          <div>
                            <img :src="items.name" :alt="items.name" />
                            <!-- action  -->
                            <v-menu
                              nudge-left="35%"
                              nudge-bottom="5"
                              offset-y
                              min-width="10.4rem"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <div
                                  v-bind="attrs"
                                  v-on="on"
                                  class="absolute action__activator"
                                >
                                  <SvgDotsVertical />
                                </div>
                              </template>
                              <v-list class="dropdown__list">
                                <!-- Edit -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Edit</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                                <!-- Delete -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Delete</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </div>
                        </div>
                      </v-row>
                    </section>
                  </v-tab-item>
                  <!--====================== Video ======================-->
                  <v-tab-item class="tab_item m-0 p-0">
                    <!-- Video -->
                    <section class="input__card">
                      <p class="title__card bordered">Video</p>
                      <v-row class="input__row">
                        <div class="col-12 pb-0">
                          <input
                            type="text"
                            required
                            class="form-control input_field"
                            placeholder="Title of Video"
                          />
                        </div>
                        <div class="col-12 pb-1">
                          <input
                            type="text"
                            required
                            class="form-control input_field"
                            placeholder="Video Url E.g: youtube, vimeo"
                          />
                        </div>
                        <div class="col-12 pb-1 text-right">
                          <Button
                            :elevation="0"
                            height="5rem"
                            minWidth="20.4rem"
                            color="var(--primary-color)"
                            text="Add Video"
                          />
                        </div>
                      </v-row>
                    </section>

                    <section class="photos_area mt-3">
                      <v-row class="input__row all">
                        <div
                          v-for="n in 4"
                          :key="n + 2132344"
                          class="col-12 col-sm-6 col-md-4 selected__images__area"
                        >
                          <div>
                            <iframe
                              src="https://www.youtube.com/embed/LQG_VMrJiQc?si=rOQ84xF1hDz3-jYt"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                            <!-- action  -->
                            <v-menu
                              nudge-left="35%"
                              nudge-bottom="5"
                              offset-y
                              min-width="10.4rem"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <div
                                  v-bind="attrs"
                                  v-on="on"
                                  class="absolute action__activator"
                                >
                                  <SvgDotsVertical />
                                </div>
                              </template>
                              <v-list class="dropdown__list">
                                <!-- Edit -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Edit</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                                <!-- Delete -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Delete</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </div>
                        </div>
                      </v-row>
                    </section>
                  </v-tab-item>
                  <!--====================== Document ======================-->
                  <v-tab-item class="tab_item m-0 p-0">
                    <!-- Document -->
                    <section class="input__card">
                      <p class="title__card bordered">Document</p>
                      <v-row class="input__row">
                        <div class="col-12 pb-0">
                          <input
                            type="text"
                            required
                            class="form-control input_field"
                            placeholder="Title of Document"
                          />
                        </div>
                        <div class="col-12 pb-1">
                          <DragDrop
                            allowedValues=".doc,.pdf,.xls,.xlsx,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            :maxSize="2"
                          />
                        </div>
                        <div class="col-12 pb-1 text-right">
                          <Button
                            :elevation="0"
                            height="5rem"
                            minWidth="20.4rem"
                            color="var(--primary-color)"
                            text="Add Document"
                          />
                        </div>
                      </v-row>
                    </section>

                    <section class="photos_area mt-3">
                      <v-row class="input__row all">
                        <div
                          v-for="n in 4"
                          :key="n + 2132344"
                          class="col-12 col-sm-6 col-md-4 selected__images__area"
                        >
                          <div>
                            <img src="/images/documentIcon.png" alt="" />
                            <!-- action  -->
                            <v-menu
                              nudge-left="35%"
                              nudge-bottom="5"
                              offset-y
                              min-width="10.4rem"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <div
                                  v-bind="attrs"
                                  v-on="on"
                                  class="absolute action__activator"
                                >
                                  <SvgDotsVertical />
                                </div>
                              </template>
                              <v-list class="dropdown__list">
                                <!-- Edit -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Edit</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                                <!-- Delete -->
                                <v-list-item class="dropdown__list-item">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      class="dropdown__list-title"
                                      >Delete</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </div>
                        </div>
                      </v-row>
                    </section>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-tab-item>
          </v-tabs-items>
          <section class="bottom__section">
            <Button
              v-if="tabIndicator >= 2"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-color)"
              text="Skip"
              minWidth="20.4rem"
              height="5rem"
              color="var(--border)"
            />
            <Button
              :elevation="0"
              height="5rem"
              minWidth="20.4rem"
              color="var(--primary-color)"
              text="Next"
            />
          </section>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      width: "100%",
      persistent: false,
      menuModel: false,
      tabIndicator: 0,
      tabIndicator_gallery: 0,
      temp: null,
      tabItems: [
        "Select Template",
        "Card Setup",
        "Personal Details",
        "About & Services",
        "Gallery",
      ],
      tabItems__gallery: [
        {
          label: "Photos",
          icon: "SvgGalleryPhoto",
        },
        {
          label: "Videos",
          icon: "SvgGalleryVideo",
        },
        {
          label: "Documents",
          icon: "SvgGalleryDocument",
        },
      ],
      selected__images: [
        {
          title: "wdwdw",
          name: "/images/temp/user.jpg",
          size: 1,
        },
        {
          title: "ededede",
          name: "/images/temp/user2.jpg",
          size: 1,
        },
      ],
      // socials design
      tabIndicator_social: 0,
      socials: [
        // facebook:
        {
          name: "Facebook",
          icon: "facebook",
          urlFormat: "https://facebook.com/",
          color: "#4673ea",
        },
        // whatsapp:
        {
          name: "WhatsApp",
          icon: "whatsapp",
          urlFormat: "https://whatsapp.com",
          color: "#8fe86a",
        },
        // twitter:
        {
          name: "Twitter",
          icon: "twitter",
          urlFormat: "https://twitter.com/",
          color: "#5796e2",
        },
        // instagram:
        {
          name: "Instagram",
          icon: "instagram",
          urlFormat: "https://instagram.com/",
          color: "#b72b8d",
        },
        // linkedin:
        {
          name: "LinkedIn",
          icon: "linkedin",
          urlFormat: "https://linkedin.com/in/",
          color: "#4568ac",
        },
        // telegram:
        {
          name: "Telegram",
          icon: "telegram",
          urlFormat: "https://t.me/",
          color: "#000",
        },
        // snapchat:
        {
          name: "Snapchat",
          icon: "snapchat",
          urlFormat: "https://snapchat.com/add/",
          color: "#000",
        },
        // tiktok:
        {
          name: "Tiktok",
          icon: "tiktok",
          urlFormat: "https://tiktok.com/@",
          color: "#030101",
        },
        // twitch:
        {
          name: "Twitch",
          icon: "twitch",
          urlFormat: "https://twitch.tv/",
          color: "#9045fd",
        },
        // reddit:
        {
          name: "Reddit",
          icon: "reddit",
          urlFormat: "https://reddit.com/user/",
          color: "#fa5e00",
        },
        // skype:
        {
          name: "Skype",
          icon: "skype",
          urlFormat: "https://join.skype.com/invite/",
          color: "#0c9de7",
        },

        // dribbble:
        {
          name: "Dribble",
          icon: "dribbble",
          urlFormat: "https://dribbble.com/",
          color: "#be205c",
        },
        // pinterest:
        {
          name: "Pinterest",
          icon: "pinterest",
          urlFormat: "https://pinterest.com/",
          color: "#c9001f",
        },

        // tumblr:
        {
          name: "Youtube",
          icon: "youtube",
          urlFormat: "https://youtube.com/@",
          color: "#FF0000",
        },
        // tumblr:
        {
          name: "Tumblr",
          icon: "tumblr",
          urlFormat: "https://yourblog.tumblr.com/",
          color: "#142036",
        },
        // line:
        {
          name: "Line",
          icon: "line",
          urlFormat: "https://line.com/",
          color: "#c9001f",
        },
        // discord:
        {
          name: "Discord",
          icon: "discord",
          urlFormat: "https://discord.com/users/",
          color: "#5765f2",
        },
        // medium:
        {
          name: "Medium",
          icon: "medium",
          urlFormat: "https://medium.com/",
          color: "#000000",
        },
        // behance:
        {
          name: "Behance",
          icon: "behance",
          urlFormat: "https://behance.com/",
          color: "#000000",
        },
        // stumbleupon:
        {
          name: "Stumble",
          icon: "stumbleupon",
          urlFormat: "https://stumbleupon.com/",
          color: "#c9001f",
        },

        // viber:
        {
          name: "Viber",
          icon: "viber",
          urlFormat: "https://viber.com/",
          color: "#8055a2",
        },
        // vimeo:
        {
          name: "Vimeo",
          icon: "vimeo",
          urlFormat: "https://vimeo.com/",
          color: "#15b9ec",
        },
        // weixin:
        {
          name: "Weixin",
          icon: "weixin",
          urlFormat: "https://weixin.com/",
          color: "#04df85",
        },
        // stack_overflow:
        {
          name: "Stack",
          icon: "stack-overflow",
          urlFormat: "https://stackoverflow.com/users/",
          color: "#f2740d",
        },
      ],
      nav: null,
      nav2: null,
      nav3: null,
      updateNav: null,
      addSocialInput: false,
      toolTipDisabled: false,
      newSocials: {
        val: "",
        type: "",
        color: "",
        placeholder: "",
      },
      updateSocial: {
        id: "",
        url: "",
        type: "",
        color: "",
        placeholder: "",
        index: null,
      },
      social: [],
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll() {
      this.showModal = false;
    },
    showAddSocialInput(navigation, index, item) {
      switch (navigation) {
        case 1:
          if (this.nav === index) {
            this.nav = null;
            this.addSocialInput = false;
            this.newSocials.val = "";
            this.newSocials.color = null;
            this.newSocials.type = null;
            this.newSocials.placeholder = null;
          } else {
            this.nav = index;
            this.nav2 = null;
            this.nav3 = null;
            this.updateNav = null;
            this.newSocials.val = item.urlFormat;
            this.newSocials.placeholder = item.urlFormat;
            this.addSocialInput = true;
            this.showUpdateSocialForm = false;
            this.newSocials.color = item.color;
            this.newSocials.type = item.icon;
            if (this.newSocials.type == "whatsapp") {
              this.newSocials.val = "";
              this.newSocials.placeholder = null;
            }
          }
          break;
        case 2:
          if (this.nav2 === index) {
            this.nav2 = null;
            this.addSocialInput = false;
            this.newSocials.val = "";
          } else {
            this.nav = null;
            this.nav2 = index;
            this.nav3 = null;
            this.updateNav = null;
            this.newSocials.val = item.urlFormat;
            this.newSocials.placeholder = item.urlFormat;
            this.addSocialInput = true;
            this.showUpdateSocialForm = false;
            this.newSocials.color = item.color;
            this.newSocials.type = item.icon;
          }
          break;
        case 3:
          if (this.nav3 === index) {
            this.nav3 = null;
            this.addSocialInput = false;
            this.newSocials.val = "";
          } else {
            this.nav = null;
            this.nav2 = null;
            this.nav3 = index;
            this.updateNav = null;
            this.newSocials.val = item.urlFormat;
            this.newSocials.placeholder = item.urlFormat;
            this.addSocialInput = true;
            this.showUpdateSocialForm = false;
            this.newSocials.color = item.color;
            this.newSocials.type = item.icon;
          }
      }
    },
    showSocialUpdateInput(index) {
      if (this.updateNav === index) {
        this.showUpdateSocialForm = false;
        this.updateNav = null;
        this.toolTipDisabled = false;
        if (this.social[index].code) {
          this.selectedCode = {
            flag: "",
            code: "",
          };
        }
      } else {
        this.updateNav = index;
        this.toolTipDisabled = index;
        this.updateSocial.id = this.social[index].social_link_id;
        // whatsapp check
        if (
          this.social[index].url.includes(
            "https://api.whatsapp.com/send?phone="
          )
        ) {
          var trunck = this.social[index].url.replace(
            "https://api.whatsapp.com/send?phone=",
            ""
          );
          if (this.social[index].url.includes(this.social[index].code)) {
            var nocode = trunck.replace(this.social[index].code, "");
            this.selectedCode = {
              flag: this.social[index].flag,
              code: this.social[index].code,
            };
          }
          this.updateSocial.url = nocode;
        } else {
          this.updateSocial.url =
            this.social && this.social[index] ? this.social[index].url : "";
        }
        this.updateSocial.type = this.social[index]
          ? this.social[index].type
          : "";
        this.updateSocial.color = this.social[index]
          ? this.social[index].color
          : "";
        this.updateSocial.placeholder = this.social[index]
          ? this.social[index].placeholder
          : "";
        this.updateSocial.index = index;
        this.showUpdateSocialForm = true;

        // close other forms and styles
        this.nav = null;
        this.nav2 = null;
        this.nav3 = null;
        this.addSocialInput = false;
      }
    },
    // add socials locally
    addNewLocalSocial(type) {
      switch (type) {
        // add new
        case 0:
          if (this.newSocials.type == "whatsapp") {
            var noText = this.newSocials.val.replace(/[A-Za-z]/g, "");
            var noSpecial = noText.replace(/[^a-zA-Z0-9 ]/g, "");
            if (noSpecial == "") {
              return;
            } else {
              if (!this.selectedCode.code) {
                this.selectedCode.code = 93;
              }
              this.social.push({
                social_link_id: "",
                url:
                  "https://api.whatsapp.com/send?phone=" +
                  this.selectedCode.code +
                  noSpecial,
                type: this.newSocials.type,
                flag: this.selectedCode.flag,
                code: this.selectedCode.code,
                color: this.newSocials.color,
                // card_id: this.cardDetails.id,
              });
              this.selectedCode = {
                flag: "",
                code: "",
              };
            }
          } else {
            let str = this.newSocials.val;
            var chekedVal = "";
            let urlRegex =
              /^(http|https):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}[\/#?]?.*$/i;
            if (urlRegex.test(str)) {
              chekedVal = str;
            } else {
              chekedVal = this.newSocials.placeholder + str;
            }
            this.social.push({
              social_link_id: "",
              url: chekedVal,
              type: this.newSocials.type,
              color: this.newSocials.color,
              placeholder: this.newSocials.placeholder,
              // card_id: this.cardDetails.id,
            });
          }
          this.newSocials.val = this.newSocials.placeholder;
          if (this.newSocials.type == "whatsapp") {
            this.newSocials.val = "";
          }
          break;
        // update existing
        case 1:
          if (this.social[this.updateSocial.index].type == "whatsapp") {
            var noText = this.updateSocial.url.replace(/[A-Za-z]/g, "");
            var noSpecial = noText.replace(/[^a-zA-Z0-9 ]/g, "");
            if (noSpecial == "") {
              return;
            } else {
              this.social[this.updateSocial.index].url =
                "https://api.whatsapp.com/send?phone=" +
                this.selectedCode.code +
                noSpecial;
              // set up for another update
              this.social[this.updateSocial.index].flag =
                this.selectedCode.flag;
              this.social[this.updateSocial.index].code =
                this.selectedCode.code;
              // reset values
              this.selectedCode = {
                flag: "",
                code: "",
              };
            }
          } else {
            let str = this.updateSocial.url;
            var chekedVal = "";
            let urlRegex =
              /^(http|https):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}[\/#?]?.*$/i;
            if (urlRegex.test(str)) {
              chekedVal = str;
            } else {
              chekedVal = this.updateSocial.placeholder + str;
            }
            this.social[this.updateSocial.index].url = chekedVal;
          }

          this.showUpdateSocialForm = false;
          this.updateNav = null;
          if (this.updateSocial.id) {
            this.addNewSocial();
          }

          break;
      }
    },
    userSocialLink(val) {
      return window.location.origin + "/svgs/socials/" + val + ".svg";
    },
    // number validatrion
    inputValidation(id) {
      var input = document.querySelectorAll("#" + id + "." + id);
      input.forEach((element) => {
        this.setInputFilter(
          element,
          function (value) {
            return /^-?\d*$/.test(value);
          },
          "Please enter a valid phone number"
        );
      });
    },
    // verify phone number is number
    setInputFilter(textbox, inputFilter, errMsg) {
      [
        "input",
        "keydown",
        "keyup",
        "mousedown",
        "mouseup",
        "select",
        "contextmenu",
        "drop",
        "focusout",
      ].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
          if (inputFilter(this.value)) {
            // Accepted value
            if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
              this.classList.remove("input-error");
              this.setCustomValidity("");
            }
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            // Rejected value - restore the previous one
            if (this.classList.contains("socialInputwhatsapp")) {
              this.classList.add("input-error");
              this.setCustomValidity(errMsg);
              this.reportValidity();
              this.value = this.oldValue;
              this.setSelectionRange(
                this.oldSelectionStart,
                this.oldSelectionEnd
              );
            } else {
              return;
            }
          } else {
            // Rejected value - nothing to restore
            // this.newSocials.val = ''
            this.value = "";
          }
        });
      });
    },
    deleteSocial(index) {
      this.showUpdateSocialForm = false;
      this.social.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>