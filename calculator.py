# Python CLI Engine for IB Diploma Points
def evaluate_ib(hl_scores, sl_scores, tok, ee):
    sub_total = sum(hl_scores) + sum(sl_scores)
    core = 3 if {tok, ee} <= {'A', 'B'} and (tok=='A' or ee=='A') else 2
    return sub_total + core
if __name__ == '__main__':
    print("IB Points:", evaluate_ib([6,6,5], [7,6,6], 'B', 'A'))
