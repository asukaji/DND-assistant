declare namespace Basic {
  /**
   * 基础生物属性
   */
  interface Living {
    /** 生命值 */
    healthPoints: number;

    /** 魔法值 */
    manaPoints: number;

    /** 状态 */
    status: Status;

    /** 增益/负增益 */
    buffs: Buff[];
  }

  /**
   * 状态
   * TODO: 扩充状态
   */
  enum Status {
    Normal = 'normal',

    Dead = 'dead',
  }

  /**
   * 增益/负增益
   */
  interface Buff {
    /**
     * 增益方向
     * 1 上升
     * -1 下降
     */
    direction: 1 | -1;

    /** 影响属性 */
    statsNames: keyof Stats[];

    /** 描述 */
    description: string;
  }

  /** 属性面板 */
  interface Stats {
    /** 力量---主动施加的物理互动，比如 打人，搬动石块。 */
    strength: number;

    /** 敏捷---角色与空间和环境的即时互动，比如 远程射击（瞄准是与距离这种空间感互动） 走钢丝。 */
    agility: number;

    /** 体质---与恶劣环境的互动-被动抵抗能力。 */
    physical: number;

    /** 主动施加的与信息相关的互动，比如学习魔法，解读文件，识破阴谋。 */
    intelligence: number;

    /** 感知---与环境中和非直接交流角色的信息互动，比如理解动物，搜索踪迹，感知神力和信仰。 */
    perception: number;

    /** 魅力---与直接可交流角色的信息互动。比如说服。 */
    charm: number;
  }
}
