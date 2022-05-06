const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecial() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackVal = getRandomValue(5, 12);
      this.monsterHealth -= attackVal;

      this.attackPlayer();
    },
    attackPlayer() {
      const attackVal = getRandomValue(8, 15);
      this.playerHealth -= attackVal;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackVal = getRandomValue(10, 25);
      this.monsterHealth -= attackVal;

      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healVal = getRandomValue(8, 20);
      if (this.playerHealth + healVal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healVal;
      }

      this.attackPlayer();
    },
  },
}).mount("#game");
