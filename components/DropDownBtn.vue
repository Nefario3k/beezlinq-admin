<template>
  <v-menu :nudge-bottom="5" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <Button
          :elevation="0"
          :outlined="buttonStyle.outlined"
          :textColor="buttonStyle.textColor"
          :width="buttonStyle.width"
          :svg="buttonStyle.svg"
          :svgLeft="buttonStyle.svgLeft"
          :svgRight="buttonStyle.svgRight"
          :text="activeVal"
          :minWidth="buttonStyle.minWidth"
          :height="buttonStyle.height"
          :color="buttonStyle.color"
          :contentClass="buttonStyle.contentClass"
        />
      </div>
    </template>
    <v-list v-if="activeVal" class="dropdown__list userDropDown">
      <v-list-item
        v-for="(item, id) in listItems[breakName[0]][breakName[1]]"
        @click="changeValue(item)"
        :key="id + Math.random()"
        :class="`dropdown__list-item ${
          item.label === activeVal ? 'active' : ''
        }`"
      >
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title">{{
            item.label
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    resetBtnStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    listNames: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonStyle: {
        outlined: true,
        textColor: "var(--primary-dark-color)",
        width: "max-content",
        svg: true,
        svgLeft: "",
        svgRight: "SvgAngleDown",
        minWidth: "13.4rem",
        height: "3rem",
        color: "var(--border)",
        contentClass: "card__dropdown",
      },
      listItems: {
        cards: {
          perweek: [
            { label: "Weekly", value: "Weekly" },
            { label: "Free Users", value: "Free Users" },
            { label: "Subscribed Users", value: "Subscribed Users" },
            { label: "Suspend User", value: "Suspend User" },
          ],
          users: [
            { label: "Registration", value: "Registration" },
            { label: "Subscribed Users", value: "Subscribed Users" },
            { label: "Free Users", value: "Free Users" },
            { label: "Suspended User", value: "Suspended User" },
            { label: "Disabled User", value: "Disabled User" },
          ],
          type: [
            { label: "All Cards", value: "All Cards" },
            { label: "Scanned Cards", value: "Scanned Cards" },
            { label: "Beezlinq Cards", value: "Beezlinq Cards" },
          ],
          status: [
            { label: "all Cards", value: "all Cards" },
            { label: "Active Cards", value: "Active Cards" },
            { label: "inactive Cards", value: "inactive Cards" },
            { label: "disabled Cards", value: "disabled Cards" },
            { label: "thrashed Cards", value: "thrashed Cards" },
          ],
        },
        users: {
          all: [
            { label: "All Users", value: "All Users" },
            { label: "Registration", value: "Registration" },
            { label: "Subscribed Users", value: "Subscribed Users" },
            { label: "Free Users", value: "Free Users" },
            { label: "Suspended User", value: "Suspended User" },
            { label: "Disabled User", value: "Disabled User" },
          ],
          dividen: [
            { label: "All Users", value: "All Users" },
            { label: "Registrations", value: "Registrations" },
            { label: "Pro Users", value: "Pro Users" },
            { label: "Free Users", value: "Free Users" },
            { label: "Active Users", value: "Active Users" },
            { label: "Inactive Users", value: "Inactive Users" },
            { label: "Suspended Users", value: "Suspended Users" },
          ],
          type: [
            { label: "All Users", value: "All Users" },
            { label: "Free Users", value: "Free Users" },
            { label: "Premium Users", value: "Premium Users" },
          ],
          location: [
            { label: "All Location", value: "All Location" },
            { label: "Registration", value: "Registration" },
            { label: "Subscribed Users", value: "Subscribed Users" },
            { label: "Free Users", value: "Free Users" },
            { label: "Suspended User", value: "Suspended User" },
            { label: "Disabled User", value: "Disabled User" },
          ],
        },
        payment: {
          all: [
            { label: "All Plans", value: "All Plans" },
            { label: "Subscription", value: "Subscription" },
            { label: "Scan Unit", value: "Scan Unit" },
          ],
          perweek: [
            { label: "Weekly", value: "Weekly" },
            { label: "Monthly", value: "Monthly" },
            { label: "Yearly", value: "Yearly" },
          ],
          perThis: [
            { label: "This week", value: "This week" },
            { label: "This month", value: "This month" },
            { label: "This year", value: "This year" },
          ],
          currency: [
            { label: "All Currency", value: "All Currency" },
            { label: "Naira", value: "Naira" },
            { label: "Dollar", value: "Dollar" },
          ],
          type: [
            { label: "All Payment", value: "All Payment" },
            { label: "Plan Subscription", value: "Plan Subscription" },
            { label: "Scan Unit", value: "Scan Unit" },
          ],
        },
        analytics: {
          userAct: [
            { label: "Registration", value: "Registration" },
            { label: "Login", value: "Login" },
            { label: "Subscription", value: "Subscription" },
          ],
        },
        template: {
          perweek: [
            { label: "Today", value: "Today" },
            { label: "Free Users", value: "Free Users" },
            { label: "Subscribed Users", value: "Subscribed Users" },
            { label: "Suspend User", value: "Suspend User" },
          ],
          usage: [
            { label: "Template Usage", value: "Template Usage" },
            { label: "Template Previews", value: "Template Previews" },
          ],
          type: [
            { label: "All template", value: "All template" },
            { label: "Free Template", value: "Free Template" },
            { label: "Premium Template", value: "Premium Template" },
            { label: "Custom Template", value: "Custom Template" },
          ],
          name: [
            { label: "All template", value: "All template" },
            { label: "Green Template", value: "Green Template" },
            { label: "Orange Template", value: "Orange Template" },
            { label: "Purple Template", value: "Purple Template" },
            { label: "Red Template", value: "Red Template" },
            { label: "Lucid Template", value: "Lucid Template" },
            { label: "Dark Template", value: "Dark Template" },
          ],
          category: [
            { label: "All Categories", value: "category" },
            { label: "art", value: "art" },
            { label: "veauty", value: "veauty" },
            { label: "real-estate", value: "beatty" },
            { label: "education", value: "education" },
            { label: "beatty", value: "beatty" },
            { label: "beatty", value: "beatty" },
          ],
        },
        country: {
          temp: [
            { label: "All Location", value: "All Location" },
            { label: "Nigeria", value: "Nigeria" },
            { label: "Ghana", value: "Ghana" },
            { label: "Panama", value: "Panama" },
          ],
          world: [
            { label: "Worldwide", value: "Worldwide" },
            { label: "Spain", value: "Spain" },
            { label: "Nepal", value: "Nepal" },
            { label: "Panama", value: "Panama" },
            { label: "United States", value: "United States" },
            { label: "Ghana", value: "Ghana" },
          ],
        },
        transaction: {
          status: [
            { label: "All status", value: "All status" },
            { label: "failed", value: "failed" },
            { label: "pending", value: "pending" },
          ],
        },
      },
      selectedVal: {
        label: "",
        value: "",
      },
    };
  },
  computed: {
    activeVal() {
      if (!this.selectedVal.label) {
        if (this.breakName !== null) {
          if (
            this.breakName.length === 2 &&
            this.listItems.hasOwnProperty(this.breakName[0])
          )
            return this.listItems[this.breakName[0]][this.breakName[1]][0]
              .label;
        }
        return "An error occurred!";
      }
      return this.selectedVal.label;
    },
    breakName() {
      if (this.listNames) {
        return this.listNames.split(" ");
      }
      return null;
    },
  },
  methods: {
    changeValue(item) {
      this.selectedVal = item;
      this.$emit("changeValue", item);
    },
  },
  mounted() {
    if (Object.keys(this.resetBtnStyle).length) {
      this.buttonStyle = { ...this.buttonStyle, ...this.resetBtnStyle };
    }
  },
};
</script>
