4
from lark import Lark, Transformer

grammar = u'!n_unsigned_int: xrule_0-> alias_0\n!n_int: xrule_3 xrule_0-> alias_1\n!n_unsigned_decimal: xrule_0 xrule_5-> alias_2\n!n_decimal: xrule_6 xrule_0 xrule_5-> alias_3\n!n_percentage: n_decimal xrule_7-> alias_4\n!n_jsonfloat: xrule_6 xrule_0 xrule_5 xrule_9-> alias_5\n!n__ws_maybe: xrule_10-> alias_6\n!n__ws: xrule_11-> alias_7\n!n_a: xrule_12\n    |xrule_13\n!n_b: xrule_14\n    |xrule_15\n!n_c: xrule_16\n    |xrule_17\n!n_d: xrule_18\n    |xrule_19\n!n_e: xrule_20\n    |xrule_21\n!n_f: xrule_22\n    |xrule_23\n!n_g: xrule_24\n    |xrule_25\n!n_h: xrule_26\n    |xrule_27\n!n_i: xrule_28\n    |xrule_29\n!n_j: xrule_30\n    |xrule_31\n!n_k: xrule_32\n    |xrule_33\n!n_l: xrule_34\n    |xrule_35\n!n_m: xrule_36\n    |xrule_37\n!n_n: xrule_38\n    |xrule_39\n!n_o: xrule_40\n    |xrule_41\n!n_p: xrule_42\n    |xrule_43\n!n_q: xrule_44\n    |xrule_45\n!n_r: xrule_46\n    |xrule_47\n!n_s: xrule_48\n    |xrule_49\n!n_t: xrule_50\n    |xrule_51\n!n_u: xrule_52\n    |xrule_53\n!n_v: xrule_54\n    |xrule_55\n!n_w: xrule_56\n    |xrule_57\n!n_x: xrule_58\n    |xrule_59\n!n_y: xrule_60\n    |xrule_61\n!n_z: xrule_62\n    |xrule_63\n!n_exa: xrule_20\n    |n_e n_x n_a\n!n_peta: xrule_42\n    |n_p n_e n_t n_a\n!n_tera: xrule_50\n    |n_t n_e n_r n_a\n!n_giga: xrule_24\n    |n_g n_i n_g n_a\n!n_mega: xrule_36\n    |n_m n_e n_g n_a\n!n_kilo: xrule_33\n    |n_k n_i n_l n_o\n!n_hecto: xrule_27\n    |n_h n_e n_c n_t n_o\n!n_deci: xrule_19\n    |n_d n_e n_c n_i\n!n_centi: xrule_17\n    |n_c n_e n_n n_t n_i\n!n_milli: xrule_37\n    |n_m n_i n_l n_l n_i\n!n_micro: xrule_53\n    |/[\\u03BC]/\n    |/[\\u00B5]/\n    |/[\\uD835]/ /[\\uDECD]/\n    |/[\\uD835]/ /[\\uDF07]/\n    |/[\\uD835]/ /[\\uDF41]/\n    |/[\\uD835]/ /[\\uDF7B]/\n    |/[\\uD835]/ /[\\uDFB5]/\n    |n_m n_i n_c n_r n_o\n!n_nano: xrule_39\n    |n_n n_a n_n n_o\n!n_pico: xrule_43\n    |n_p n_i n_c n_o\n!n_femto: xrule_23\n    |n_f n_e n_m n_t n_o\n!n_atto: xrule_13\n    |n_a n_t n_t n_o\n!n_packagesize: n__packagesize-> alias_8\n!n__packagesize: n__imperialsize\n    |n__metricsize\n!n__imperialsize: xrule_64\n    |xrule_65\n    |xrule_66\n    |xrule_67\n    |xrule_68\n    |xrule_69\n    |xrule_70\n    |xrule_71\n    |xrule_72\n    |xrule_73\n    |xrule_74\n!n__metricsize: n___metricsize xrule_10 n_m n_e n_t n_r n_i n_c-> alias_9\n    |n_m n_e n_t n_r n_i n_c xrule_10 n___metricsize-> alias_10\n    |n_unambigiousmetricsize-> alias_11\n!n_unambigiousmetricsize: xrule_75\n    |xrule_76\n    |xrule_77\n    |xrule_78\n    |xrule_79\n    |xrule_80\n    |xrule_81\n    |xrule_82\n    |xrule_83\n!n___metricsize: n_unambigiousmetricsize\n    |xrule_66\n    |xrule_67\n!n_main: n__ws_maybe n_main_ n__ws_maybe-> alias_12\n!n_main_: n_component\n!n_component: n_capacitor-> alias_13\n    |n_resistor-> alias_14\n    |n_led-> alias_15\n    |n_packagesize-> alias_16\n    |n_tolerance-> alias_17\n    |n_voltage_rating-> alias_18\n    |n_cap_-> alias_19\n    |n_res_-> alias_20\n!n_capacitor: n_cspecs n_capacitance n_cspecs\n    |n_cap n_cspecs n_capacitancenofarad\n    |n_capacitance n_cspecs\n!n_cap: n_cap_ n__ws-> alias_21\n!n_cap_: xrule_17 n_i\n    |xrule_84 n_i\n    |xrule_85 n_i\n!n_cspecs: xrule_86\n    |n__ws\n!n_cspec: n_tolerance\n    |n_characteristic\n    |n_voltage_rating\n    |n_packagesize\n!n_voltage_rating: n_decimal n__ws_maybe n_v-> alias_22\n!n_characteristic: n_characteristic_-> alias_23\n!n_characteristic_: n_class1\n    |n_class2\n!n_class1: n_class1_ceramic_name-> alias_24\n    |n_class1_eia_code-> alias_25\n    |n_class1_ceramic_name n__ws_maybe xrule_87 n__ws_maybe n_class1_eia_code-> alias_26\n    |n_class1_eia_code n__ws_maybe xrule_87 n__ws_maybe n_class1_ceramic_name-> alias_27\n!n_class1_ceramic_name: n_c xrule_88 n_g-> alias_28\n    |n_p xrule_89-> alias_29\n    |n_n xrule_90-> alias_30\n    |n_n xrule_91-> alias_31\n    |n_n xrule_92-> alias_32\n    |n_n xrule_93-> alias_33\n    |n_n xrule_94-> alias_34\n    |n_n xrule_95-> alias_35\n    |n_n xrule_96-> alias_36\n    |n_n xrule_97-> alias_37\n    |n_n xrule_98-> alias_38\n!n_class1_eia_code: n_n n_p xrule_88-> alias_39\n    |n_m xrule_99 n_g-> alias_40\n    |n_h xrule_100 n_g-> alias_41\n    |n_l xrule_100 n_g-> alias_42\n    |n_p xrule_100 n_h-> alias_43\n    |n_r xrule_100 n_h-> alias_44\n    |n_s xrule_100 n_h-> alias_45\n    |n_t xrule_100 n_h-> alias_46\n    |n_u xrule_100 n_j-> alias_47\n    |n_q xrule_101 n_k-> alias_48\n    |n_p xrule_101 n_k-> alias_49\n!n_class2: n_class2_letter n_class2_number n_class2_code-> alias_50\n!n_class2_letter: n_x\n    |n_y\n    |n_z\n!n_class2_number: xrule_102\n    |xrule_103\n    |xrule_104\n    |xrule_99\n    |xrule_105\n    |xrule_106\n!n_class2_code: n_p\n    |n_r\n    |n_s\n    |n_t\n    |n_u\n    |n_v\n!n_tolerance: xrule_107 n_decimal n__ws_maybe xrule_7-> alias_51\n!n_plusminus: xrule_108\n    |xrule_109\n    |xrule_110\n!n_capacitance: n_decimal n__ws_maybe xrule_111 n__ws_maybe n_farad-> alias_52\n!n_capacitancenofarad: n_decimal n__ws_maybe xrule_111-> alias_53\n!n_farad: n_f-> alias_54\n    |n_f n_a n_r n_a n_d-> alias_55\n!n_resistor: xrule_112 n_rspecs n_resistance n_rspecs\n!n_res: n_res_ n__ws-> alias_56\n!n_res_: xrule_47 n_i\n    |xrule_113 n_i\n    |xrule_114 n_i\n!n_rspecs: xrule_115\n    |n__ws\n!n_rspec: n_tolerance\n    |n_power_rating\n    |n_packagesize\n!n_power_rating: n_decimal n__ws_maybe xrule_116 n__ws_maybe n_watts-> alias_57\n!n_watts: n_watts_-> alias_58\n!n_watts_: n_w\n    |n_w n_a n_t n_t n_s\n!n_resistance: n_decimal n__ws_maybe n_rest-> alias_59\n!n_rest: n_rmetricprefix xrule_117 xrule_118\n    |n_ohm\n!n_ohm: n_ohm_-> alias_60\n!n_ohm_: n_o n_h n_m\n    |xrule_119\n    |xrule_120\n!n_led: n_led_letters n_ledspecs\n    |n_ledspecs n_led_letters\n    |n_ledspecs n_led_letters n_ledspecs\n!n_led_letters: n_l n_e n_d-> alias_61\n!n_ledspecs: xrule_121\n!n_ledspec: n_packagesize\n    |n_color\n!n_color: n_color_name-> alias_62\n!n_color_name: n_r n_e n_d-> alias_63\n    |n_g n_r n_e n_e n_n-> alias_64\n    |n_b n_l n_u n_e-> alias_65\n    |n_y n_e n_l n_l n_o n_w-> alias_66\n    |n_o n_r n_a n_n n_g n_e-> alias_67\n    |n_w n_h n_i n_t n_e-> alias_68\n    |n_a n_m n_b n_e n_r-> alias_69\n    |n_c n_y n_a n_n-> alias_70\n    |n_p n_u n_r n_p n_l n_e-> alias_71\n    |n_y n_e n_l n_l n_o n_w n__ws_maybe n_g n_r n_e n_e n_n-> alias_72\n!n_powermetricprefix: n_giga-> alias_73\n    |n_mega-> alias_74\n    |n_kilo-> alias_75\n    |n_milli-> alias_76\n    |n_micro-> alias_77\n    |n_nano-> alias_78\n    |n_pico-> alias_79\n    |n_femto-> alias_80\n!n_rmetricprefix: n_giga-> alias_81\n    |n_mega-> alias_82\n    |n_kilo-> alias_83\n    |n_r-> alias_84\n!n_cmetricprefix: n_micro-> alias_85\n    |n_nano-> alias_86\n    |n_pico-> alias_87\n!xrule_121: (n__ws_maybe n_ledspec n__ws_maybe)+\n!xrule_120: "\u2126"\n!xrule_69: "1008"\n!xrule_68: "0805"\n!xrule_67: "0603"\n!xrule_66: "0402"\n!xrule_65: "0201"\n!xrule_64: "01005"\n!xrule_63: "z"\n!xrule_62: "Z"\n!xrule_61: "y"\n!xrule_60: "Y"\n!xrule_52: "U"\n!xrule_53: "u"\n!xrule_50: "T"\n!xrule_51: "t"\n!xrule_56: "W"\n!xrule_57: "w"\n!xrule_54: "V"\n!xrule_55: "v"\n!xrule_58: "X"\n!xrule_59: "x"\n!xrule_30: "J"\n!xrule_31: "j"\n!xrule_32: "K"\n!xrule_33: "k"\n!xrule_34: "L"\n!xrule_35: "l"\n!xrule_36: "M"\n!xrule_37: "m"\n!xrule_38: "N"\n!xrule_39: "n"\n!xrule_103: "5"\n!xrule_102: "4"\n!xrule_101: "3"\n!xrule_100: "2"\n!xrule_107: (n_plusminus n__ws_maybe)?\n!xrule_106: "9"\n!xrule_105: "8"\n!xrule_104: "6"\n!xrule_109: "\xb1"\n!xrule_108: "+/-"\n!xrule_45: "q"\n!xrule_44: "Q"\n!xrule_47: "r"\n!xrule_46: "R"\n!xrule_41: "o"\n!xrule_40: "O"\n!xrule_43: "p"\n!xrule_42: "P"\n!xrule_49: "s"\n!xrule_48: "S"\n!xrule_23: "f"\n!xrule_22: "F"\n!xrule_21: "e"\n!xrule_20: "E"\n!xrule_27: "h"\n!xrule_26: "H"\n!xrule_25: "g"\n!xrule_24: "G"\n!xrule_29: "i"\n!xrule_28: "I"\n!xrule_114: "resistor"\n!xrule_115: (n__ws_maybe n_rspec n__ws_maybe)*\n!xrule_116: (n_powermetricprefix)?\n!xrule_117: (n_int)?\n!xrule_110: "+-"\n!xrule_111: (n_cmetricprefix)?\n!xrule_112: (n_res)?\n!xrule_113: "res"\n!xrule_118: (n__ws_maybe n_ohm)?\n!xrule_119: "\u03a9"\n!xrule_8: (/[+-]/)?\n!xrule_9: (/[eE]/ xrule_8 xrule_0)?\n!xrule_4: "."\n!xrule_5: (xrule_4 xrule_0)?\n!xrule_6: (xrule_1)?\n!xrule_7: "%"\n!xrule_0: (/[0-9]/)+\n!xrule_1: "-"\n!xrule_2: "+"\n!xrule_3: (xrule_1\n    |xrule_2)?\n!xrule_16: "C"\n!xrule_17: "c"\n!xrule_14: "B"\n!xrule_15: "b"\n!xrule_12: "A"\n!xrule_13: "a"\n!xrule_10: (/[\\s]/)*\n!xrule_11: (/[\\s]/)+\n!xrule_18: "D"\n!xrule_19: "d"\n!xrule_98: "1500"\n!xrule_99: "7"\n!xrule_96: "750"\n!xrule_97: "1000"\n!xrule_94: "330"\n!xrule_95: "470"\n!xrule_92: "150"\n!xrule_93: "220"\n!xrule_90: "33"\n!xrule_91: "75"\n!xrule_81: "4516"\n!xrule_80: "3225"\n!xrule_83: "6332"\n!xrule_82: "5025"\n!xrule_85: "capacitor"\n!xrule_84: "cap"\n!xrule_87: "/"\n!xrule_86: (n__ws_maybe n_cspec n__ws_maybe)*\n!xrule_89: "100"\n!xrule_88: "0"\n!xrule_78: "2520"\n!xrule_79: "3216"\n!xrule_74: "2512"\n!xrule_75: "1005"\n!xrule_76: "1608"\n!xrule_77: "2012"\n!xrule_70: "1206"\n!xrule_71: "1210"\n!xrule_72: "1806"\n!xrule_73: "2010"'

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers([u'toImperial', u'type', u'resistance', u'filter', u'capacitance', u'_flatten', u'flatten', u'nuller', u'id'])
@Js
def PyJsHoisted_nuller_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return var.get(u"null")
PyJsHoisted_nuller_.func_name = u'nuller'
var.put(u'nuller', PyJsHoisted_nuller_)
@Js
def PyJsHoisted_resistance_(d, i, reject, this, arguments, var=var):
    var = Scope({u'i':i, u'this':this, u'd':d, u'arguments':arguments, u'reject':reject}, var)
    var.registers([u'ohm', u'd', u'i', u'integral', u'reject', u'metricPrefix', u'fractional', u'quantity'])
    var.put(u'integral', var.get(u'd').get(u'0'))
    var.put(u'metricPrefix', var.get(u'd').get(u'2').get(u'0'))
    var.put(u'fractional', var.get(u'd').get(u'2').get(u'1'))
    var.put(u'ohm', var.get(u'd').get(u'2').get(u'2'))
    if var.get(u'fractional'):
        if JsRegExp(u'/\\./').callprop(u'test', var.get(u'integral').callprop(u'toString')):
            return var.get(u'reject')
        var.put(u'quantity', ((var.get(u'integral')+Js(u'.'))+var.get(u'fractional')))
    else:
        var.put(u'quantity', var.get(u'integral'))
    PyJs_Object_5_ = Js({u'resistance':var.get(u'parseFloat')((var.get(u'quantity')+(var.get(u'metricPrefix') or Js(u''))))})
    return PyJs_Object_5_
PyJsHoisted_resistance_.func_name = u'resistance'
var.put(u'resistance', PyJsHoisted_resistance_)
@Js
def PyJsHoisted_filter_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    @Js
    def PyJs_anonymous_0_(t, this, arguments, var=var):
        var = Scope({u'this':this, u't':t, u'arguments':arguments}, var)
        var.registers([u't'])
        return (var.get(u't')!=var.get(u"null"))
    PyJs_anonymous_0_._set_name(u'anonymous')
    return var.get(u'd').callprop(u'filter', PyJs_anonymous_0_)
PyJsHoisted_filter_.func_name = u'filter'
var.put(u'filter', PyJsHoisted_filter_)
@Js
def PyJsHoisted_capacitance_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'farad', u'metricPrefix', u'd', u'quantity'])
    var.put(u'quantity', var.get(u'd').get(u'0'))
    var.put(u'metricPrefix', var.get(u'd').get(u'2'))
    var.put(u'farad', var.get(u'd').get(u'4'))
    PyJs_Object_4_ = Js({u'capacitance':var.get(u'parseFloat')((var.get(u'quantity')+(var.get(u'metricPrefix') or Js(u''))))})
    return PyJs_Object_4_
PyJsHoisted_capacitance_.func_name = u'capacitance'
var.put(u'capacitance', PyJsHoisted_capacitance_)
@Js
def PyJsHoisted__flatten_(arr, res, this, arguments, var=var):
    var = Scope({u'this':this, u'res':res, u'arr':arr, u'arguments':arguments}, var)
    var.registers([u'i', u'res', u'arr', u'cur', u'len'])
    var.put(u'i', Js(0.0))
    var.put(u'len', var.get(u'arr').get(u'length'))
    #for JS loop
    
    while (var.get(u'i')<var.get(u'len')):
        try:
            var.put(u'cur', var.get(u'arr').get(var.get(u'i')))
            (var.get(u'_flatten')(var.get(u'cur'), var.get(u'res')) if var.get(u'Array').callprop(u'isArray', var.get(u'cur')) else var.get(u'res').callprop(u'push', var.get(u'cur')))
        finally:
                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    return var.get(u'res')
PyJsHoisted__flatten_.func_name = u'_flatten'
var.put(u'_flatten', PyJsHoisted__flatten_)
@Js
def PyJsHoisted_flatten_(arr, this, arguments, var=var):
    var = Scope({u'this':this, u'arr':arr, u'arguments':arguments}, var)
    var.registers([u'arr'])
    return var.get(u'_flatten')(var.get(u'arr'), Js([]))
PyJsHoisted_flatten_.func_name = u'flatten'
var.put(u'flatten', PyJsHoisted_flatten_)
@Js
def PyJsHoisted_type_(t, this, arguments, var=var):
    var = Scope({u'this':this, u't':t, u'arguments':arguments}, var)
    var.registers([u't'])
    @Js
    def PyJs_anonymous_2_(d, this, arguments, var=var):
        var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
        var.registers([u'd'])
        PyJs_Object_3_ = Js({u'type':var.get(u't')})
        return Js([PyJs_Object_3_]).callprop(u'concat', var.get(u'd'))
    PyJs_anonymous_2_._set_name(u'anonymous')
    return PyJs_anonymous_2_
PyJsHoisted_type_.func_name = u'type'
var.put(u'type', PyJsHoisted_type_)
@Js
def PyJsHoisted_id_(x, this, arguments, var=var):
    var = Scope({u'this':this, u'x':x, u'arguments':arguments}, var)
    var.registers([u'x'])
    return var.get(u'x').get(u'0')
PyJsHoisted_id_.func_name = u'id'
var.put(u'id', PyJsHoisted_id_)
pass
pass
pass
pass
pass
PyJs_Object_1_ = Js({u'0402':Js(u'01005'),u'0603':Js(u'0201'),u'1005':Js(u'0402'),u'1608':Js(u'0603'),u'2012':Js(u'0805'),u'2520':Js(u'1008'),u'3216':Js(u'1206'),u'3225':Js(u'1210'),u'4516':Js(u'1806'),u'4532':Js(u'1812'),u'5025':Js(u'2010'),u'6332':Js(u'2512')})
var.put(u'toImperial', PyJs_Object_1_)
pass
pass
pass
@Js
def PyJs_anonymous_6_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'M7G')
PyJs_anonymous_6_._set_name(u'anonymous')
var.put(u'alias_29', PyJs_anonymous_6_)
@Js
def PyJs_anonymous_7_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'C0G')
PyJs_anonymous_7_._set_name(u'anonymous')
var.put(u'alias_28', PyJs_anonymous_7_)
var.put(u'alias_21', var.get(u'nuller'))
var.put(u'alias_20', var.get(u'type')(Js(u'resistor')))
@Js
def PyJs_anonymous_8_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    PyJs_Object_9_ = Js({u'characteristic':var.get(u'd').get(u'0').get(u'0')})
    return PyJs_Object_9_
PyJs_anonymous_8_._set_name(u'anonymous')
var.put(u'alias_23', PyJs_anonymous_8_)
@Js
def PyJs_anonymous_10_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    PyJs_Object_11_ = Js({u'voltage_rating':var.get(u'd').get(u'0')})
    return PyJs_Object_11_
PyJs_anonymous_10_._set_name(u'anonymous')
var.put(u'alias_22', PyJs_anonymous_10_)
var.put(u'alias_25', var.get(u'id'))
var.put(u'alias_24', var.get(u'id'))
var.put(u'alias_27', var.get(u'id'))
var.put(u'alias_26', var.get(u'id'))
var.put(u'alias_58', var.get(u'nuller'))
var.put(u'alias_59', var.get(u'resistance'))
var.put(u'alias_54', var.get(u'nuller'))
var.put(u'alias_55', var.get(u'nuller'))
var.put(u'alias_56', var.get(u'nuller'))
@Js
def PyJs_anonymous_12_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'metricPrefix', u'd', u'quantity'])
    var.put(u'quantity', var.get(u'd').get(u'0'))
    var.put(u'metricPrefix', var.get(u'd').get(u'2'))
    PyJs_Object_13_ = Js({u'power_rating':var.get(u'parseFloat')((var.get(u'quantity')+(var.get(u'metricPrefix') or Js(u''))))})
    return PyJs_Object_13_
PyJs_anonymous_12_._set_name(u'anonymous')
var.put(u'alias_57', PyJs_anonymous_12_)
@Js
def PyJs_anonymous_14_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'd').callprop(u'join', Js(u'')).callprop(u'toUpperCase')
PyJs_anonymous_14_._set_name(u'anonymous')
var.put(u'alias_50', PyJs_anonymous_14_)
@Js
def PyJs_anonymous_15_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    PyJs_Object_16_ = Js({u'tolerance':var.get(u'd').get(u'1')})
    return PyJs_Object_16_
PyJs_anonymous_15_._set_name(u'anonymous')
var.put(u'alias_51', PyJs_anonymous_15_)
var.put(u'alias_52', var.get(u'capacitance'))
var.put(u'alias_53', var.get(u'capacitance'))
@Js
def PyJs_anonymous_17_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    PyJs_Object_18_ = Js({u'size':var.get(u'filter')(var.get(u'flatten')(var.get(u'd'))).callprop(u'join', Js(u''))})
    return PyJs_Object_18_
PyJs_anonymous_17_._set_name(u'anonymous')
var.put(u'alias_8', PyJs_anonymous_17_)
@Js
def PyJs_anonymous_19_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'toImperial').get(var.get(u'd').get(u'0'))
PyJs_anonymous_19_._set_name(u'anonymous')
var.put(u'alias_9', PyJs_anonymous_19_)
var.put(u'alias_6', var.get(u'nuller'))
var.put(u'alias_7', var.get(u'nuller'))
@Js
def PyJs_anonymous_20_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return (var.get(u'd').get(u'0')/Js(100.0))
PyJs_anonymous_20_._set_name(u'anonymous')
var.put(u'alias_4', PyJs_anonymous_20_)
@Js
def PyJs_anonymous_21_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'parseFloat')(((((var.get(u'd').get(u'0') or Js(u''))+var.get(u'd').get(u'1').callprop(u'join', Js(u'')))+((Js(u'.')+var.get(u'd').get(u'2').get(u'1').callprop(u'join', Js(u''))) if var.get(u'd').get(u'2') else Js(u'')))+(((Js(u'e')+(var.get(u'd').get(u'3').get(u'1') or Js(u'+')))+var.get(u'd').get(u'3').get(u'2').callprop(u'join', Js(u''))) if var.get(u'd').get(u'3') else Js(u''))))
PyJs_anonymous_21_._set_name(u'anonymous')
var.put(u'alias_5', PyJs_anonymous_21_)
@Js
def PyJs_anonymous_22_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'parseFloat')((var.get(u'd').get(u'0').callprop(u'join', Js(u''))+((Js(u'.')+var.get(u'd').get(u'1').get(u'1').callprop(u'join', Js(u''))) if var.get(u'd').get(u'1') else Js(u''))))
PyJs_anonymous_22_._set_name(u'anonymous')
var.put(u'alias_2', PyJs_anonymous_22_)
@Js
def PyJs_anonymous_23_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'parseFloat')((((var.get(u'd').get(u'0') or Js(u''))+var.get(u'd').get(u'1').callprop(u'join', Js(u'')))+((Js(u'.')+var.get(u'd').get(u'2').get(u'1').callprop(u'join', Js(u''))) if var.get(u'd').get(u'2') else Js(u''))))
PyJs_anonymous_23_._set_name(u'anonymous')
var.put(u'alias_3', PyJs_anonymous_23_)
@Js
def PyJs_anonymous_24_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'parseInt')(var.get(u'd').get(u'0').callprop(u'join', Js(u'')))
PyJs_anonymous_24_._set_name(u'anonymous')
var.put(u'alias_0', PyJs_anonymous_24_)
@Js
def PyJs_anonymous_25_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    if var.get(u'd').get(u'0'):
        return var.get(u'parseInt')((var.get(u'd').get(u'0').get(u'0')+var.get(u'd').get(u'1').callprop(u'join', Js(u''))))
    else:
        return var.get(u'parseInt')(var.get(u'd').get(u'1').callprop(u'join', Js(u'')))
PyJs_anonymous_25_._set_name(u'anonymous')
var.put(u'alias_1', PyJs_anonymous_25_)
@Js
def PyJs_anonymous_26_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'P3K')
PyJs_anonymous_26_._set_name(u'anonymous')
var.put(u'alias_49', PyJs_anonymous_26_)
@Js
def PyJs_anonymous_27_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'Q3K')
PyJs_anonymous_27_._set_name(u'anonymous')
var.put(u'alias_48', PyJs_anonymous_27_)
@Js
def PyJs_anonymous_28_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'U2J')
PyJs_anonymous_28_._set_name(u'anonymous')
var.put(u'alias_47', PyJs_anonymous_28_)
@Js
def PyJs_anonymous_29_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'T2H')
PyJs_anonymous_29_._set_name(u'anonymous')
var.put(u'alias_46', PyJs_anonymous_29_)
@Js
def PyJs_anonymous_30_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'S2H')
PyJs_anonymous_30_._set_name(u'anonymous')
var.put(u'alias_45', PyJs_anonymous_30_)
@Js
def PyJs_anonymous_31_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'R2H')
PyJs_anonymous_31_._set_name(u'anonymous')
var.put(u'alias_44', PyJs_anonymous_31_)
@Js
def PyJs_anonymous_32_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'P2H')
PyJs_anonymous_32_._set_name(u'anonymous')
var.put(u'alias_43', PyJs_anonymous_32_)
@Js
def PyJs_anonymous_33_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'L2G')
PyJs_anonymous_33_._set_name(u'anonymous')
var.put(u'alias_42', PyJs_anonymous_33_)
@Js
def PyJs_anonymous_34_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'H2G')
PyJs_anonymous_34_._set_name(u'anonymous')
var.put(u'alias_41', PyJs_anonymous_34_)
@Js
def PyJs_anonymous_35_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'M7G')
PyJs_anonymous_35_._set_name(u'anonymous')
var.put(u'alias_40', PyJs_anonymous_35_)
@Js
def PyJs_anonymous_36_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'yellow green')
PyJs_anonymous_36_._set_name(u'anonymous')
var.put(u'alias_72', PyJs_anonymous_36_)
@Js
def PyJs_anonymous_37_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e9  ')
PyJs_anonymous_37_._set_name(u'anonymous')
var.put(u'alias_73', PyJs_anonymous_37_)
@Js
def PyJs_anonymous_38_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'cyan')
PyJs_anonymous_38_._set_name(u'anonymous')
var.put(u'alias_70', PyJs_anonymous_38_)
@Js
def PyJs_anonymous_39_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'purple')
PyJs_anonymous_39_._set_name(u'anonymous')
var.put(u'alias_71', PyJs_anonymous_39_)
@Js
def PyJs_anonymous_40_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-3 ')
PyJs_anonymous_40_._set_name(u'anonymous')
var.put(u'alias_76', PyJs_anonymous_40_)
@Js
def PyJs_anonymous_41_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-6 ')
PyJs_anonymous_41_._set_name(u'anonymous')
var.put(u'alias_77', PyJs_anonymous_41_)
@Js
def PyJs_anonymous_42_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e6  ')
PyJs_anonymous_42_._set_name(u'anonymous')
var.put(u'alias_74', PyJs_anonymous_42_)
@Js
def PyJs_anonymous_43_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e3  ')
PyJs_anonymous_43_._set_name(u'anonymous')
var.put(u'alias_75', PyJs_anonymous_43_)
@Js
def PyJs_anonymous_44_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-9 ')
PyJs_anonymous_44_._set_name(u'anonymous')
var.put(u'alias_78', PyJs_anonymous_44_)
@Js
def PyJs_anonymous_45_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-12')
PyJs_anonymous_45_._set_name(u'anonymous')
var.put(u'alias_79', PyJs_anonymous_45_)
@Js
def PyJs_anonymous_46_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'blue')
PyJs_anonymous_46_._set_name(u'anonymous')
var.put(u'alias_65', PyJs_anonymous_46_)
@Js
def PyJs_anonymous_47_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'green')
PyJs_anonymous_47_._set_name(u'anonymous')
var.put(u'alias_64', PyJs_anonymous_47_)
@Js
def PyJs_anonymous_48_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'orange')
PyJs_anonymous_48_._set_name(u'anonymous')
var.put(u'alias_67', PyJs_anonymous_48_)
@Js
def PyJs_anonymous_49_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'yellow')
PyJs_anonymous_49_._set_name(u'anonymous')
var.put(u'alias_66', PyJs_anonymous_49_)
var.put(u'alias_61', var.get(u'nuller'))
var.put(u'alias_60', var.get(u'nuller'))
@Js
def PyJs_anonymous_50_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'red')
PyJs_anonymous_50_._set_name(u'anonymous')
var.put(u'alias_63', PyJs_anonymous_50_)
@Js
def PyJs_anonymous_51_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    PyJs_Object_52_ = Js({u'color':var.get(u'd').get(u'0')})
    return PyJs_Object_52_
PyJs_anonymous_51_._set_name(u'anonymous')
var.put(u'alias_62', PyJs_anonymous_51_)
@Js
def PyJs_anonymous_53_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'amber')
PyJs_anonymous_53_._set_name(u'anonymous')
var.put(u'alias_69', PyJs_anonymous_53_)
@Js
def PyJs_anonymous_54_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'white')
PyJs_anonymous_54_._set_name(u'anonymous')
var.put(u'alias_68', PyJs_anonymous_54_)
@Js
def PyJs_anonymous_55_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'toImperial').get(var.get(u'd').get(u'7'))
PyJs_anonymous_55_._set_name(u'anonymous')
var.put(u'alias_10', PyJs_anonymous_55_)
@Js
def PyJs_anonymous_56_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'toImperial').get(var.get(u'd').get(u'0'))
PyJs_anonymous_56_._set_name(u'anonymous')
var.put(u'alias_11', PyJs_anonymous_56_)
@Js
def PyJs_anonymous_57_(d, this, arguments, var=var):
    var = Scope({u'this':this, u'd':d, u'arguments':arguments}, var)
    var.registers([u'd'])
    return var.get(u'filter')(var.get(u'flatten')(var.get(u'd')))
PyJs_anonymous_57_._set_name(u'anonymous')
var.put(u'alias_12', PyJs_anonymous_57_)
var.put(u'alias_13', var.get(u'type')(Js(u'capacitor')))
var.put(u'alias_14', var.get(u'type')(Js(u'resistor')))
var.put(u'alias_15', var.get(u'type')(Js(u'led')))
var.put(u'alias_16', var.get(u'type')(Js(u'unknown')))
var.put(u'alias_17', var.get(u'type')(Js(u'unknown')))
var.put(u'alias_18', var.get(u'type')(Js(u'unknown')))
var.put(u'alias_19', var.get(u'type')(Js(u'capacitor')))
@Js
def PyJs_anonymous_58_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e3  ')
PyJs_anonymous_58_._set_name(u'anonymous')
var.put(u'alias_83', PyJs_anonymous_58_)
@Js
def PyJs_anonymous_59_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e6  ')
PyJs_anonymous_59_._set_name(u'anonymous')
var.put(u'alias_82', PyJs_anonymous_59_)
@Js
def PyJs_anonymous_60_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e9  ')
PyJs_anonymous_60_._set_name(u'anonymous')
var.put(u'alias_81', PyJs_anonymous_60_)
@Js
def PyJs_anonymous_61_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-15')
PyJs_anonymous_61_._set_name(u'anonymous')
var.put(u'alias_80', PyJs_anonymous_61_)
@Js
def PyJs_anonymous_62_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-12')
PyJs_anonymous_62_._set_name(u'anonymous')
var.put(u'alias_87', PyJs_anonymous_62_)
@Js
def PyJs_anonymous_63_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-9 ')
PyJs_anonymous_63_._set_name(u'anonymous')
var.put(u'alias_86', PyJs_anonymous_63_)
@Js
def PyJs_anonymous_64_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'e-6 ')
PyJs_anonymous_64_._set_name(u'anonymous')
var.put(u'alias_85', PyJs_anonymous_64_)
@Js
def PyJs_anonymous_65_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'')
PyJs_anonymous_65_._set_name(u'anonymous')
var.put(u'alias_84', PyJs_anonymous_65_)
@Js
def PyJs_anonymous_66_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'U2J')
PyJs_anonymous_66_._set_name(u'anonymous')
var.put(u'alias_36', PyJs_anonymous_66_)
@Js
def PyJs_anonymous_67_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'Q3K')
PyJs_anonymous_67_._set_name(u'anonymous')
var.put(u'alias_37', PyJs_anonymous_67_)
@Js
def PyJs_anonymous_68_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'S2H')
PyJs_anonymous_68_._set_name(u'anonymous')
var.put(u'alias_34', PyJs_anonymous_68_)
@Js
def PyJs_anonymous_69_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'T2H')
PyJs_anonymous_69_._set_name(u'anonymous')
var.put(u'alias_35', PyJs_anonymous_69_)
@Js
def PyJs_anonymous_70_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'P2H')
PyJs_anonymous_70_._set_name(u'anonymous')
var.put(u'alias_32', PyJs_anonymous_70_)
@Js
def PyJs_anonymous_71_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'R2H')
PyJs_anonymous_71_._set_name(u'anonymous')
var.put(u'alias_33', PyJs_anonymous_71_)
@Js
def PyJs_anonymous_72_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'H2G')
PyJs_anonymous_72_._set_name(u'anonymous')
var.put(u'alias_30', PyJs_anonymous_72_)
@Js
def PyJs_anonymous_73_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'L2G')
PyJs_anonymous_73_._set_name(u'anonymous')
var.put(u'alias_31', PyJs_anonymous_73_)
@Js
def PyJs_anonymous_74_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'P3K')
PyJs_anonymous_74_._set_name(u'anonymous')
var.put(u'alias_38', PyJs_anonymous_74_)
@Js
def PyJs_anonymous_75_(this, arguments, var=var):
    var = Scope({u'this':this, u'arguments':arguments}, var)
    var.registers([])
    return Js(u'C0G')
PyJs_anonymous_75_._set_name(u'anonymous')
var.put(u'alias_39', PyJs_anonymous_75_)
pass

class TransformNearley(Transformer):
    alias_29 = var.get('alias_29').to_python()
    alias_28 = var.get('alias_28').to_python()
    alias_21 = var.get('alias_21').to_python()
    alias_20 = var.get('alias_20').to_python()
    alias_23 = var.get('alias_23').to_python()
    alias_22 = var.get('alias_22').to_python()
    alias_25 = var.get('alias_25').to_python()
    alias_24 = var.get('alias_24').to_python()
    alias_27 = var.get('alias_27').to_python()
    alias_26 = var.get('alias_26').to_python()
    alias_58 = var.get('alias_58').to_python()
    alias_59 = var.get('alias_59').to_python()
    alias_54 = var.get('alias_54').to_python()
    alias_55 = var.get('alias_55').to_python()
    alias_56 = var.get('alias_56').to_python()
    alias_57 = var.get('alias_57').to_python()
    alias_50 = var.get('alias_50').to_python()
    alias_51 = var.get('alias_51').to_python()
    alias_52 = var.get('alias_52').to_python()
    alias_53 = var.get('alias_53').to_python()
    alias_8 = var.get('alias_8').to_python()
    alias_9 = var.get('alias_9').to_python()
    alias_6 = var.get('alias_6').to_python()
    alias_7 = var.get('alias_7').to_python()
    alias_4 = var.get('alias_4').to_python()
    alias_5 = var.get('alias_5').to_python()
    alias_2 = var.get('alias_2').to_python()
    alias_3 = var.get('alias_3').to_python()
    alias_0 = var.get('alias_0').to_python()
    alias_1 = var.get('alias_1').to_python()
    alias_49 = var.get('alias_49').to_python()
    alias_48 = var.get('alias_48').to_python()
    alias_47 = var.get('alias_47').to_python()
    alias_46 = var.get('alias_46').to_python()
    alias_45 = var.get('alias_45').to_python()
    alias_44 = var.get('alias_44').to_python()
    alias_43 = var.get('alias_43').to_python()
    alias_42 = var.get('alias_42').to_python()
    alias_41 = var.get('alias_41').to_python()
    alias_40 = var.get('alias_40').to_python()
    alias_72 = var.get('alias_72').to_python()
    alias_73 = var.get('alias_73').to_python()
    alias_70 = var.get('alias_70').to_python()
    alias_71 = var.get('alias_71').to_python()
    alias_76 = var.get('alias_76').to_python()
    alias_77 = var.get('alias_77').to_python()
    alias_74 = var.get('alias_74').to_python()
    alias_75 = var.get('alias_75').to_python()
    alias_78 = var.get('alias_78').to_python()
    alias_79 = var.get('alias_79').to_python()
    alias_65 = var.get('alias_65').to_python()
    alias_64 = var.get('alias_64').to_python()
    alias_67 = var.get('alias_67').to_python()
    alias_66 = var.get('alias_66').to_python()
    alias_61 = var.get('alias_61').to_python()
    alias_60 = var.get('alias_60').to_python()
    alias_63 = var.get('alias_63').to_python()
    alias_62 = var.get('alias_62').to_python()
    alias_69 = var.get('alias_69').to_python()
    alias_68 = var.get('alias_68').to_python()
    alias_10 = var.get('alias_10').to_python()
    alias_11 = var.get('alias_11').to_python()
    alias_12 = var.get('alias_12').to_python()
    alias_13 = var.get('alias_13').to_python()
    alias_14 = var.get('alias_14').to_python()
    alias_15 = var.get('alias_15').to_python()
    alias_16 = var.get('alias_16').to_python()
    alias_17 = var.get('alias_17').to_python()
    alias_18 = var.get('alias_18').to_python()
    alias_19 = var.get('alias_19').to_python()
    alias_83 = var.get('alias_83').to_python()
    alias_82 = var.get('alias_82').to_python()
    alias_81 = var.get('alias_81').to_python()
    alias_80 = var.get('alias_80').to_python()
    alias_87 = var.get('alias_87').to_python()
    alias_86 = var.get('alias_86').to_python()
    alias_85 = var.get('alias_85').to_python()
    alias_84 = var.get('alias_84').to_python()
    alias_36 = var.get('alias_36').to_python()
    alias_37 = var.get('alias_37').to_python()
    alias_34 = var.get('alias_34').to_python()
    alias_35 = var.get('alias_35').to_python()
    alias_32 = var.get('alias_32').to_python()
    alias_33 = var.get('alias_33').to_python()
    alias_30 = var.get('alias_30').to_python()
    alias_31 = var.get('alias_31').to_python()
    alias_38 = var.get('alias_38').to_python()
    alias_39 = var.get('alias_39').to_python()
    __default__ = lambda self, n, c: c if c else None

parser = Lark(grammar, start="n_main")
def parse(text):
    return TransformNearley().transform(parser.parse(text))

