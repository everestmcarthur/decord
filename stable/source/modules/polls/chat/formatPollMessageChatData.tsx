// Module ID: 11722
// Function ID: 11723
// Name: formatPollMessageChatData
// Dependencies: [4552, 5459, 1957, 2021, 4781, 1371, 11432, 1074, 4745, 4213, 4217, 1396, 8760, 4205, 4188, 11723, 1114, 7761, 11725, 1115, 11726, 11727, 2]
// Exports: default, isPollMessageDirectlyInteractive

// Module 11722 (formatPollMessageChatData)
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4188 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import _mod4745 from "module_4745" /* 4745 */;
import useFormattedExpirationLabel from "useFormattedExpirationLabel" /* 8760 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MessageStore from "MessageStore" /* 4781 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function reactionForId(reactions, combined) {
  const iter = reactions[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult.emoji.id === "number") {
      let _HermesInternal = HermesInternal;
      let id = "" + tmp2.emoji.id;
    } else {
      id = tmp2.emoji.id;
    }
    if (id === combined) {
      iter.return();
      return nextResult;
    }
  }
}
function computeBasicPollChatData(message, arg1) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let formattedExpirationLabel = obj.formattedExpirationLabel;
  const poll = message.poll;
  if (null != poll) {
    let str = "";
    if (message.state === MessageStates.SENT) {
      if (formattedExpirationLabel == null) {
        formattedExpirationLabel = useFormattedExpirationLabel.formatExpirationLabel(poll.expiry);
      }
      str = formattedExpirationLabel;
    }
    let tmp6 = arg1;
    if (arg1 == null) {
      tmp6 = getPollState(message.getChannelId(), message.id);
    }
    if (tmp6 == null) {
      tmp6 = obj;
    }
    ({ selectedAnswerIds, submitting, editing, showResults } = tmp6);
    const reactions = message.reactions;
    let tmp8 = null == message.poll;
    if (!tmp8) {
      tmp8 = MessageStore.getMessage(message.channel_id, message.id) === message;
    }
    let flag = true;
    let obj3 = reactions;
    if (!tmp8) {
      message = MessageStore.getMessage(message.channel_id, message.id);
      const isSearchHit = message.isSearchHit;
      let tmp12 = !isSearchHit;
      if (!isSearchHit) {
        tmp12 = null != message;
      }
      let reactions1;
      if (message != null) {
        reactions1 = message.reactions;
      }
      if (reactions1 == null) {
        reactions1 = reactions;
      }
      obj3 = reactions1;
      flag = tmp12;
    }
    const someResult = obj3.some((me_vote) => true === me_vote.me_vote);
    let tmp16 = !editing;
    if (!editing) {
      tmp16 = someResult;
    }
    let tmp18 = tmp16;
    if (!tmp16) {
      tmp18 = tmp5;
    }
    if (!tmp18) {
      tmp18 = showResults;
    }
    let tmp19 = tmp2;
    if (message.state === MessageStates.SENT) {
      tmp19 = flag;
    }
    if (tmp19) {
      let tmp20 = !someResult;
      if (someResult) {
        tmp20 = editing;
      }
      if (!tmp20) {
        tmp20 = tmp18;
      }
      tmp19 = tmp20;
    }
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      const getGuildId = channel.getGuildId;
      if (getGuildId != null) {
        guildId = getGuildId();
      }
    }
    let selfMember = null;
    if (null != guildId) {
      selfMember = GuildMemberStore.getSelfMember(guildId);
    }
    const result = AutomodPermissionUtils.hasAutomodQuarantinedProfile(selfMember);
    const obj6 = { poll, canTapAnswers: tmp19, canRemoveVote: null, canShowVoteCounts: null, canSubmitVote: null, expirationLabel: null, hasSelectedAnswer: null, hasVoted: null, hasVoteRecorded: null, isEditingVote: null, isExpired: null, isInteractive: null, isSent: null, reactions: null, selectedAnswerIds: null, submitting: null, tapShouldOpenVotersModal: null, showResults: null };
    let tmp30 = tmp16;
    const result1 = CommunicationDisabledUtils.isMemberCommunicationDisabled(selfMember);
    if (tmp16) {
      tmp30 = tmp2;
    }
    if (tmp30) {
      tmp30 = !tmp5;
    }
    obj6.canRemoveVote = tmp30;
    obj6.canShowVoteCounts = tmp18;
    let tmp31 = !submitting;
    if (!submitting) {
      tmp31 = tmp14;
    }
    if (tmp31) {
      tmp31 = !tmp16;
    }
    if (tmp31) {
      tmp31 = tmp2;
    }
    if (tmp31) {
      tmp31 = !result;
    }
    if (tmp31) {
      tmp31 = !result1;
    }
    obj6.canSubmitVote = tmp31;
    obj6.expirationLabel = str;
    obj6.hasSelectedAnswer = selectedAnswerIds.size > 0;
    obj6.hasVoted = tmp16;
    obj6.hasVoteRecorded = someResult;
    obj6.isEditingVote = editing;
    obj6.isExpired = null == str && message.state === MessageStates.SENT;
    obj6.isInteractive = flag;
    obj6.isSent = message.state === MessageStates.SENT;
    obj6.reactions = obj3;
    obj6.selectedAnswerIds = selectedAnswerIds;
    obj6.submitting = submitting;
    obj6.tapShouldOpenVotersModal = tmp18;
    obj6.showResults = showResults;
    return obj6;
  }
}
const getPollState = fn(11432).getPollState;
const Constants = fn(1074);
const MessageStates = Constants.MessageStates;
let obj = { channelId: Constants.EMPTY_STRING_SNOWFLAKE_ID, selectedAnswerIds: new Set(), submitting: false, editing: false, showResults: false };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/chat/formatPollMessageChatData.tsx");

export default function formatPollMessageChatData(poll, arg1) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.animateEmoji;
  if (flag === undefined) {
    flag = false;
  }
  let str = obj.theme;
  if (str === undefined) {
    str = "dark";
  }
  let useReducedMotion;
  layout_type = undefined;
  canSubmitVote = undefined;
  expirationLabel = undefined;
  let hasSelectedAnswer;
  let hasVoted;
  isExpired = undefined;
  reactions = undefined;
  c9 = undefined;
  c10 = undefined;
  showResults = undefined;
  let totalVotes;
  computeBasicPollChatData = undefined;
  closure_14 = undefined;
  c15 = undefined;
  poll = poll.poll;
  if (null != poll) {
    const currentUser = reactions.getCurrentUser();
    if (null != currentUser) {
      useReducedMotion = canSubmitVote.useReducedMotion;
      const channel = hasSelectedAnswer.getChannel(poll.getChannelId());
      let guildId;
      if (channel != null) {
        const getGuildId = channel.getGuildId;
        if (getGuildId != null) {
          guildId = getGuildId();
        }
      }
      ({ answers, layout_type } = poll);
      let obj3 = { formattedExpirationLabel: tmp };
      const avatarUrl = flag(layout_type[15]).getAvatarUrl(currentUser, guildId);
      const tmp8 = computeBasicPollChatData(poll, arg1, obj3);
      if (null != tmp8) {
        ({ canTapAnswers, canSubmitVote } = tmp8);
        ({ expirationLabel, canRemoveVote, canShowVoteCounts } = tmp8);
        if (undefined === expirationLabel) {
          let intl = tmp4(tmp5[16]).intl;
          expirationLabel = intl.string(tmp4(tmp5[16]).t["e+J3JZ"]);
        }
        hasSelectedAnswer = tmp8.hasSelectedAnswer;
        hasVoted = tmp8.hasVoted;
        ({ isEditingVote, isExpired } = tmp8);
        ({ isInteractive, reactions } = tmp8);
        ({ selectedAnswerIds: c9, submitting: c10, tapShouldOpenVotersModal, showResults } = tmp8);
        totalVotes = tmp4(tmp5[17]).getTotalVotes(reactions);
        const intl2 = tmp4(tmp5[16]).intl;
        let obj4 = { count: totalVotes };
        computeBasicPollChatData = intl2.formatToPlainString(tmp4(tmp5[16]).t.XRkuof, obj4);
        let _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(answers.map((answer_id) => {
          const tmp = reactionForId(reactions, "" + answer_id.answer_id);
          let num;
          if (tmp != null) {
            const count_details = tmp.count_details;
            if (count_details != null) {
              num = count_details.vote;
            }
          }
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        closure_14 = HermesBuiltin.apply(items, Math);
        const mapped = answers.map((answer_id) => {
          const combined = "" + answer_id.answer_id;
          const tmp2 = reactionForId(reactions, combined);
          let num;
          if (tmp2 != null) {
            const count_details = tmp2.count_details;
            if (count_details != null) {
              num = count_details.vote;
            }
          }
          if (num == null) {
            num = 0;
          }
          let num2 = 0;
          if (0 !== totalVotes) {
            num2 = num / totalVotes;
          }
          const hasItem = _undefined.has(combined);
          let tmp6 = hasVoted;
          if (hasVoted) {
            flag = undefined;
            if (tmp2 != null) {
              flag = tmp2.me_vote;
            }
            if (flag == null) {
              flag = false;
            }
            tmp6 = flag;
          }
          let tmp7 = isExpired;
          const match = _mod4745.match({ didSelfVote: tmp6, hasVoted, isExpired, isSelected: hasItem, isLeader: num >= closure_14 && 0 !== num, showResults });
          obj = { didSelfVote: tmp6, hasVoted, isExpired, isSelected: hasItem, isLeader: num >= closure_14 && 0 !== num, showResults };
          const withResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected");
          const withResult1 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected");
          const withResult2 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected");
          const withResult3 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted");
          const withResult4 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted");
          const withResult5 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted");
          const withResult6 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected");
          const obj2 = { answerId: combined, pollMedia: null, isSelected: null, isVictor: null, didSelfVote: null, style: null, shouldAnimateTransition: null, votesPercentage: null, votes: null };
          const obj3 = { text: answer_id.poll_media.text, emoji: null, stickerId: null, attachmentIds: null };
          let name = answer_id.poll_media.emoji;
          const obj4 = { animateEmoji: flag };
          let flag2 = obj4.animateEmoji;
          const withResult7 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected").with({ isExpired: false, showResults: true }, () => "notVoted");
          if (flag2 === undefined) {
            flag2 = false;
          }
          let num3 = obj4.size;
          if (num3 === undefined) {
            num3 = 48;
          }
          if (null == name) {
            obj3.emoji = undefined;
            obj3.stickerId = answer_id.poll_media.sticker_id;
            obj3.attachmentIds = answer_id.poll_media.attachment_ids;
            obj2.pollMedia = obj3;
            obj2.isSelected = hasItem;
            if (tmp7) {
              tmp7 = tmp4;
            }
            obj2.isVictor = tmp7;
            obj2.didSelfVote = tmp6;
            obj2.style = otherwiseResult;
            let tmp20 = c10;
            if (c10) {
              tmp20 = !useReducedMotion;
            }
            obj2.shouldAnimateTransition = tmp20;
            const _Math = Math;
            obj2.votesPercentage = Math.round(100 * num2);
            const match1 = tmp8(4745).match(layout_type);
            const str2 = tmp8(4745);
            obj2.votes = match1.with(tmp8(11725).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(" + num.toLocaleString() + ")").otherwise(() => {
              const intl = flag(layout_type[16]).intl;
              return intl.formatToPlainString(flag(layout_type[16]).t.XRkuof, { count: num });
            });
            return obj2;
          } else {
            let flag3 = name.animated;
            if (tmp11) {
              const customEmojiById = EmojiStore.getCustomEmojiById(name.id);
              let flag4;
              if (customEmojiById != null) {
                flag4 = customEmojiById.animated;
              }
              if (flag4 == null) {
                flag4 = false;
              }
              flag3 = flag4;
            }
            if (flag2) {
              if (flag3 == null) {
                flag3 = false;
              }
              flag2 = flag3;
            }
            let combined1 = null;
            if (null != name.id) {
              const _HermesInternal = HermesInternal;
              combined1 = "" + name.id;
            }
            const obj5 = { id: combined1, name: name.name, displayName: null, src: null, animated: null };
            if (null == name.id) {
              let name2 = UnicodeEmojisDefault.convertSurrogateToName(name.name);
            } else {
              name2 = name.name;
            }
            obj5.displayName = name2;
            if (null == name.id) {
              name = name.name;
              let uRL = EmojiUtilsDefault.getURL(name);
            } else {
              const obj6 = { id: name.id, animated: flag2, size: num3 };
              uRL = AvatarUtilsDefault.getEmojiURL(obj6);
            }
            obj5.src = uRL;
            obj5.animated = flag2;
            tmp11 = null == flag3 && null != name.id;
          }
        });
        const tmp4Result = tmp4(tmp5[17]);
        let obj5 = { isExpired, canSubmitVote, hasVoted, isEditingVote, canRemoveVote, isInteractive, showResults };
        let match = tmp4(tmp5[8]).match(obj5);
        let str2 = tmp4(tmp5[8]);
        let withResult = match.with({ isInteractive: false }, () => {

        });
        let withResult1 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        });
        let withResult2 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = util.intl;
          obj.label = intl.string(util.t.JwkNU4);
          obj.enabled = hasSelectedAnswer;
          return obj;
        });
        let withResult3 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = util.intl;
          obj.label = intl.string(util.t.JwkNU4);
          obj.enabled = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        });
        let withResult4 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = util.intl;
          obj.label = intl.string(util.t.JwkNU4);
          obj.enabled = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        });
        const otherwiseResult = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = util.intl;
          obj.label = intl.string(util.t.JwkNU4);
          obj.enabled = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        }).otherwise(() => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = util.intl;
          obj.label = intl.string(util.t.JwkNU4);
          obj.enabled = canSubmitVote;
          return obj;
        });
        const tmp4Result2 = tmp4(tmp5[19]);
        const intl3 = tmp4(tmp5[16]).intl;
        const string = intl3.string;
        const t = tmp4(tmp5[16]).t;
        if (isIOSResult) {
          let stringResult = string(t["PVATM/"]);
        } else {
          stringResult = string(t.cHfFql);
        }
        c15 = stringResult;
        isIOSResult = tmp4(tmp5[19]).isIOS();
        let obj6 = { isExpired, isInteractive, isEditingVote };
        let match1 = tmp4(tmp5[8]).match(obj6);
        const str3 = tmp4(tmp5[8]);
        let withResult5 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        });
        let tmp20;
        let withResult6 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        });
        if (isInteractive) {
          if (!isExpired) {
            if (!hasVoted) {
              if (!showResults) {
                const obj7 = { label: null, presentation: "textButton", enabled: true, type: "showVotes" };
                const intl4 = tmp4(tmp5[16]).intl;
                obj7.label = intl4.string(tmp4(tmp5[16]).t["/KHAUF"]);
                tmp20 = obj7;
              }
            }
          }
        }
        const allow_multiselect = poll.allow_multiselect;
        const otherwiseResult1 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        }).otherwise(() => ({ label, secondaryLabel: expirationLabel, accessibilityHint, presentation: "text", enabled: true, type: "showVoterDetails" }));
        const obj8 = { isInteractive, isExpired, canSelectMultipleAnswers: allow_multiselect };
        const match2 = tmp4(tmp5[8]).match(obj8);
        const str4 = tmp4(tmp5[8]);
        let withResult7 = match2.with({ isInteractive: false }, () => {

        });
        const withResult8 = match2.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        });
        const obj9 = {
          question: poll.question,
          promptLabel: match2.with({ isInteractive: false }, () => {

                }).with({ isExpired: true }, () => {

                }).with({ canSelectMultipleAnswers: true }, () => {
                  const intl = flag(layout_type[16]).intl;
                  return intl.string(flag(layout_type[16]).t.yCXvxa);
                }).otherwise(() => {
                  const intl = flag(layout_type[16]).intl;
                  return intl.string(flag(layout_type[16]).t["9Y2wKO"]);
                }),
          answers: mapped,
          answersInteraction: null,
          answerTapAccessibilityLabel: null,
          layoutType: null,
          resources: null,
          containerStyle: "normal",
          primaryAction: null,
          isInteractive: null,
          canTapAnswers: null,
          canSelectMultipleAnswers: null,
          hasSelectedAnswer: null,
          canShowVoteCounts: null,
          hasVoted: null,
          isExpired: null,
          myAvatarUrl: null,
          secondaryAction: null,
          tertiaryAction: null
        };
        const withResult9 = match2.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ canSelectMultipleAnswers: true }, () => {
          const intl = flag(layout_type[16]).intl;
          return intl.string(flag(layout_type[16]).t.yCXvxa);
        });
        const obj10 = { tapShouldOpenVotersModal, canTapAnswers, canSelectMultipleAnswers: allow_multiselect };
        const match3 = tmp4(tmp5[8]).match(obj10);
        const str5 = tmp4(tmp5[8]);
        const withResult10 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const withResult11 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const withResult12 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canSelectMultipleAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS);
        obj9.answersInteraction = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canSelectMultipleAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS).with({ canSelectMultipleAnswers: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.CHECKBOXES).exhaustive();
        let tmp21;
        if (tapShouldOpenVotersModal) {
          tmp21 = stringResult;
        }
        obj9.answerTapAccessibilityLabel = tmp21;
        obj9.layoutType = layout_type;
        const obj11 = { theme: str, layoutType: layout_type };
        obj9.resources = useReducedMotion(tmp5[21])(obj11);
        obj9.primaryAction = otherwiseResult;
        obj9.isInteractive = isInteractive;
        obj9.canTapAnswers = canTapAnswers;
        obj9.canSelectMultipleAnswers = allow_multiselect;
        obj9.hasSelectedAnswer = hasSelectedAnswer;
        obj9.canShowVoteCounts = canShowVoteCounts;
        obj9.hasVoted = hasVoted;
        obj9.isExpired = isExpired;
        obj9.myAvatarUrl = avatarUrl;
        obj9.secondaryAction = otherwiseResult1;
        obj9.tertiaryAction = tmp20;
        return obj9;
      }
      let obj2 = flag(layout_type[15]);
    }
  }
};
export { reactionForId };
export const isPollMessageDirectlyInteractive = function isPollMessageDirectlyInteractive(poll) {
  let tmp = null == poll.poll;
  if (!tmp) {
    tmp = MessageStore.getMessage(poll.channel_id, poll.id) === poll;
  }
  return tmp;
};
export { computeBasicPollChatData };
